function sendForm(event) {
  event.preventDefault();

  const form = document.querySelector("form");

  if (!form.checkValidity()) {
    // alerting user to fill in details correctly
    alert(
      "Make sure you write your name and the email correctly as well as composing the message before submitting!"
    );
    return;
  }

  alert("Your message has been sent!");
}
