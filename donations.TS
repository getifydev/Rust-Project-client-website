 // Function to show an alert after a delay
 function showAlert(event) {
    event.preventDefault(); // Prevents the default link behavior
    setTimeout(function () {
      alert("Alert maaybe there was problem or server crash!...");
    }, 2000); // 2000 milliseconds (2 seconds) delay
    alert('put your faild messages whaatever you want');
    alert('put your extra messges informations for faild console message!');
  }

  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '10.00' // Replace with the default donation amount
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Transaction completed by ' + details.payer.name.given_name + '!');
      });
    }

