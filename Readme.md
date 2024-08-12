I want to implment a newsletter that will show all the techy professional events in Windsor.
To do that I need to create a basic website architecture with server.js that will 
have the following dir: 

admin: server.js --> index.html->> sign.html->> admin.html
when admin clicks the button, the email will be sent to multiple addresses
(need to automate the send email process further, replacing click with real-time date)

client: server.js --> index.html->>{===}->> client.html --> data.json(saving emails)
                                                                     (email validity check)



so everytime after writing the email address in the input field, it will be saved to json when btn clicked


<><>About Hackforge<><Contact>
<h1>Sign Up for the Weekly Newsletter</h1>
<input>
