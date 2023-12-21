// Check if the browser supports the Notification API
if ("Notification" in window) {
    // Request permission to show notifications
    Notification.requestPermission().then(function (permission) {
        console.log('Notification permission:', permission);
    });

    // Function to show a notification
    function showNotification() {
        if (Notification.permission === "granted") {
            // Create a notification
            var notification = new Notification("Button Pressed", {
                body: "You pressed the button!",
            });

            // Optional: Close the notification after a few seconds
            setTimeout(notification.close.bind(notification), 5000);
        }
    }

    // Add event listener to the button
    var button = document.getElementById("notificationButton");
    button.addEventListener("click", showNotification);
} else {
    console.log('Error');
}

document.getElementById('notificationButton') {
    console.error {
        MessageEvent('please try agin later')
    }
}