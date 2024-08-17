const express = require("express");
const path = require("path");
const session = require("express-session");
require("dotenv").config();
const fs = require('fs'); // Import the fs module for file reading
const nodemailer = require("nodemailer"); // Import nodemailer module for sending emails

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure session middleware
app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Use true in production with HTTPS
}));

// Serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Sign-in endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Replace with your actual user authentication logic
  if (email === 'infoveygo2024@gmail.com' && password === 'qltc cdua gcwy uwmq') {
      req.session.isAuthenticated = true; // Set session variable
      req.session.fromSignin = true; // Set flag for redirect check
      res.json({ success: true }); // Respond with success
  } else {
      res.json({ success: false, message: 'Invalid credentials' }); // Respond with failure
  }
});

// Serve sign.html
app.get("/auth/sign.html", (req, res) => {
    res.sendFile(path.join(__dirname, "auth/sign.html"));
});

// Handle the /execute-app endpoint to redirect
app.get("/execute-app", (req, res) => {
    res.redirect("/auth/sign.html");
});

// Middleware to check if the user is authenticated
function checkAuthentication(req, res, next) {
    console.log("checkAuthentication - isAuthenticated:", req.session.isAuthenticated);
    if (req.session.isAuthenticated) {
        next();
    } else {
        console.log("User is not authenticated, redirecting to /auth/sign.html");
        res.redirect("/auth/sign.html");
    }
}

// Middleware to check if the user was redirected from the sign-in page
function checkRedirectFromSignin(req, res, next) {
    console.log("checkRedirectFromSignin - fromSignin:", req.session.fromSignin);
    if (req.session.fromSignin) {
        req.session.fromSignin = false; // Reset the flag
        req.session.refreshCheck = true; // Set the refresh check flag
        next();
    } else {
        console.log("User did not come from signin, redirecting to /auth/sign.html");
        res.redirect("/auth/sign.html");
    }
}

// Middleware to handle page refresh and redirect to sign-in page
function handlePageRefresh(req, res, next) {
    if (req.session.refreshCheck) {
        req.session.refreshCheck = false; // Reset the refresh check flag
        next();
    } else {
        console.log("Page refreshed, redirecting to /auth/sign.html");
        res.redirect("/auth/sign.html");
    }
}

// Serve admin.html with authentication and redirect check
app.get(
    "/admin.html",
    checkAuthentication,
    checkRedirectFromSignin,
    handlePageRefresh,
    (req, res) => {
        res.sendFile(path.join(__dirname, "admin.html"));
    }
);


// Endpoint to send events.html via email to all addresses in data.json
app.post('/send-events-email', (req, res) => {
  // Read the email addresses from data.json
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading data.json:', err);
          return res.json({ success: false, message: 'Failed to read data.json' });
      }

      const emailList = JSON.parse(data).emails;

      // Read the events.html file to use as the email body
      fs.readFile(path.join(__dirname, 'events.html'), 'utf8', (err, htmlContent) => {
          if (err) {
              console.error('Error reading events.html:', err);
              return res.json({ success: false, message: 'Failed to read events.html' });
          }

          // Add the 'open' attribute to all <details> tags
          const modifiedHtmlContent = htmlContent.replace(/<details/g, '<details open');

          // Create a transporter object using SMTP
          const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: process.env.EMAIL_USER, // Your email
                  pass: process.env.EMAIL_PASS  // Your email password
              }
          });

          // Send the email to each address
          emailList.forEach(email => {
              const mailOptions = {
                  from: process.env.EMAIL_USER,
                  to: email,
                  subject: 'Upcoming Events',
                  html: modifiedHtmlContent // Send the modified content of events.html as the email body
              };

              transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                      console.error(`Error sending email to ${email}:`, error);
                  } else {
                      console.log(`Email sent to ${email}: ` + info.response);
                  }
              });
          });

          res.json({ success: true, message: 'Emails sent' });
      });
  });
});

// Serve index.html
app.get("/events.html", (req, res) => {
  res.sendFile(path.join(__dirname, "events.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
