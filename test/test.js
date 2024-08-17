<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Upcoming Events</title>
    <style>
        body, h1, h2, h3, p, strong {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            color: #333; /* Default text color for light mode */
        }

        body {
            background-color: #00796b; /* Teal background */
            display: flex;
            justify-content: center;
            align-items: flex-start; /* Align items at the top */
            min-height: 100vh;
            padding: 20px;
            box-sizing: border-box;
        }

        .container {
            width: 100%;
            max-width: 600px;
            position: relative;
            padding-top: 60px; /* Add padding to make room for the toggle */
        }

        .event-container {
            background-color: #fff; /* White background for the container */
            border: 6px solid #1C1C1C; /* Very dark grey border */
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Slightly darker shadow */
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 6px solid #1C1C1C; /* Very dark grey border below the header */
            padding-bottom: 10px;
        }

        .toggle-button {
            padding: 10px 20px;
            background-color: #004d40; /* Dark green button */
            color: #e6fffa; /* Light text color */
            border: 6px solid #1C1C1C; /* Very dark grey border */
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
            text-align: center;
            margin-bottom: 20px;
            transition: background-color 0.3s;
        }

        .toggle-button:hover {
            background-color: #002d29; /* Darker green on hover */
        }

        details {
            margin-bottom: 10px;
            border: 6px solid #1C1C1C; /* Very dark grey border around each details element */
            border-radius: 5px;
            padding: 10px;
        }

        summary {
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            list-style: none;
            color: #333; /* Default text color for light mode */
            border-bottom: 4px solid #1C1C1C; /* Thicker very dark grey border below summary */
            padding-bottom: 5px;
        }

        .event-content {
            padding-top: 10px;
            line-height: 1.6;
            color: #555; /* Default text color for light mode */
        }

        .event-image {
            width: 100%; /* Image takes full width of its container */
            height: auto; /* Maintains aspect ratio */
            max-width: 100%; /* Ensures it doesn't exceed the container's width */
            border-radius: 5px;
            margin-bottom: 10px;
            border: 6px solid #1C1C1C; /* Very dark grey border around the image */
            object-fit: cover; /* Ensures the image is covered without distortion */
        }

        /* Toggle Switch Styles */
        .toggle-switch {
            position: absolute; /* Position relative to the container */
            top: 0; /* Position it at the top of the container */
            left: 50%; /* Center horizontally */
            transform: translateX(-50%); /* Adjust to center */
            z-index: 1000; /* Ensure it stays on top */
            display: inline-block;
            width: 60px;
            height: 34px;
        }

        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: #2196F3; /* Blue background when toggled on */
        }

        input:checked + .slider:before {
            transform: translateX(26px);
        }

        /* Dark Mode Styles */
        .dark-mode {
            background-color: #1C1C1C; /* Dark grey background */
            color: #fff; /* White text color for the body */
        }

        .dark-mode .event-container {
            background-color: #333; /* Darker background for the container */
            border-color: #2196F3; /* Blue border in dark mode */
        }

        .dark-mode summary,
        .dark-mode h1,
        .dark-mode h2,
        .dark-mode h3,
        .dark-mode p,
        .dark-mode strong {
            color: #fff; /* White text color in dark mode */
        }

        .dark-mode .event-content {
            color: #ddd; /* Lighter grey text color for event content */
        }

        .dark-mode .event-image {
            border-color: #2196F3; /* Blue border around the image */
        }

        .dark-mode .toggle-button {
            background-color: #2196F3; /* Blue button background in dark mode */
            color: #fff; /* Keep text white */
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .event-container {
                padding: 15px; /* Adjust padding for smaller screens */
            }

            .toggle-button {
                font-size: 16px; /* Slightly smaller text on smaller screens */
                padding: 8px 16px; /* Smaller padding for the button */
            }
        }

        @media (max-width: 480px) {
            .header h1 {
                font-size: 18px; /* Smaller header text on very small screens */
            }

            .event-container {
                padding: 10px; /* Even less padding on very small screens */
            }

            .toggle-button {
                font-size: 14px; /* Smaller button text */
                padding: 6px 12px; /* Smaller padding */
            }

            summary {
                font-size: 14px; /* Smaller summary text */
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- Toggle Switch positioned at the top center of the container -->
        <label class="toggle-switch">
            <input type="checkbox" id="modeToggle">
            <span class="slider"></span>
        </label>

        <div class="event-container">
            <div class="header">
                <h1>EVENTS</h1>
            </div>

            <div class="event-details">
                <!-- Example event #1 -->
                <details open>
                    <summary><strong><h2>Event 1: Company Workshop</h2></strong></summary>
                    <div class="event-content">
                        <img src="image.jpg" alt="Workshop Image" class="event-image">
                        <h1>Join us for an in-depth workshop on the latest industry trends.</h1>
                    </div>
                </details>

                <!-- Example event #2 -->
                <details open>
                    <summary><strong><h2>Event 2: Product Launch</h2></strong></summary>
                    <div class="event-content">
                        <img src="product-launch.jpg" alt="Product Launch Image" class="event-image">
                        <p>Be the first to experience our new product at the official launch event.</p>
                    </div>
                </details>

                <!-- Example event #3 -->
                <details open>
                    <summary><strong><h2>Event 3: Networking Session</h2></strong></summary>
                    <div class="event-content">
                        <img src="networking.jpg" alt="Networking Image" class="event-image">
                        <p>Expand your professional network in our exclusive session.</p>
                    </div>
                </details>

                <!-- Example event #4 -->
                <details open>
                    <summary><strong><h2>Event 4: Technology Expo</h2></strong></summary>
                    <div class="event-content">
                        <img src="expo.jpg" alt="Expo Image" class="event-image">
                        <p>Discover the latest innovations at our technology expo.</p>
                    </div>
                </details>

                <!-- Example event #5 -->
                <details open>
                    <summary><strong><h2>Event 5: Leadership Summit</h2></strong></summary>
                    <div class="event-content">
                        <img src="summit.jpg" alt="Leadership Summit Image" class="event-image">
                        <p>Join industry leaders for discussions on the future of leadership.</p>
                    </div>
                </details>
            </div>
        </div>
    </div>

    <script>
        // Toggle between light and dark modes
        document.getElementById('modeToggle').addEventListener('change', function () {
            document.body.classList.toggle('dark-mode');
        });
    </script>
</body>

</html>
