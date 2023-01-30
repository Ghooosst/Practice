$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var event = $("#event").val();
      if (!name || !email || !event) {
        alert("All fields are required. Please enter values in all fields.");
      } else {
        alert("Registration Successful!\n\nName: " + name + "\nEmail: " + email + "\nEvent: " + event);
      }
    });
  });