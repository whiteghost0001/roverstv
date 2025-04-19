// === Animate both About and Contact boxes ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

// Select and observe about boxes
const aboutBoxes = document.querySelectorAll(".about-box");
aboutBoxes.forEach((box) => observer.observe(box));

// Select and observe contact boxes
const contactBoxes = document.querySelectorAll(".contact-box");
contactBoxes.forEach((box) => observer.observe(box));
