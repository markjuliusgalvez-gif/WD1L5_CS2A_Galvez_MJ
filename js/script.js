// ----- Contact form -----
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Shows a short message under the Send button (red for errors, green for success)
function showStatus(text, isError) {
  formStatus.textContent = text;
  formStatus.style.color = isError ? "#ffb4b4" : "#a6e3b0";
}

contactForm.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page when the form is submitted
  event.preventDefault();

  // Read what the visitor typed (trim removes spaces at the start and end)
  const visitorName = document.getElementById("cName").value.trim();
  const visitorEmail = document.getElementById("cEmail").value.trim();
  const visitorMessage = document.getElementById("cMessage").value.trim();

  // 1. Make sure nothing is empty
  if (!visitorName || !visitorEmail || !visitorMessage) {
    showStatus("Please fill in your name, email, and message.", true);
    return;
  }

  // 2. Make sure the email looks like name@site.com
  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visitorEmail);
  if (!emailLooksValid) {
    showStatus("That email address doesn't look right.", true);
    return;
  }

  // 3. Build the email link: subject and body must be encoded for a URL
  const subject = "Portfolio message from " + visitorName;
  const body = visitorMessage + "\n\nFrom: " + visitorName + " (" + visitorEmail + ")";
  const mailLink =
    "mailto:markjuliusgalvez@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  // 4. Open the visitor's email app and clear the form
  window.location.href = mailLink;
  showStatus("sent", false);
  contactForm.reset();
});

// ----- Footer year -----
document.getElementById("year").textContent = new Date().getFullYear();