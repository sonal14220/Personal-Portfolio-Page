
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleMode");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";
      const email = document.getElementById("email")?.value.trim() || "";
      const message = document.getElementById("message")?.value.trim() || "";

      if (!formMessage) return;

      if (!name || !email || !message) {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
      } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        form.reset(); 
      }
    });
  }
});
