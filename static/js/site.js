document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    });
  });

  const contactForm = document.querySelector("[data-contact-form]");

  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      const button = contactForm.querySelector("button[type='submit']");
      if (button) {
        button.textContent = "Sending...";
        button.setAttribute("aria-busy", "true");
      }
    });
  }
});
