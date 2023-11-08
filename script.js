$(document).ready(function () {
    $("#payment-details").validate({
      rules: {
        cardnumber: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        expirydate: {
          required: true,
        },
        cvv: {
          required: true,
          minlength: 3,
          number: true,
          maxlength: 3
        }
      },
      messages: {
        cardnumber: {
          required: "Please enter your credit card number...",
          minlength: "CC number should be 10 digits only...",
          maxlength: "CC number should be 10 digits only..."
        },
        expirydate: {
          required: "Please enter your card's expiry date..."
        },
        cvv: {
          required: "Please enter your card's CVV...",
          minlength: "CVV should be 3 digits...",
          maxlength: "CVV should be 3 digit..."
        }
      }
    });
});