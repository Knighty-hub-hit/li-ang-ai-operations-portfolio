const root = document.documentElement;

function updateProgress() {
  const max = root.scrollHeight - window.innerHeight;
  root.style.setProperty("--progress", max > 0 ? window.scrollY / max : 0);
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("pointermove", (event) => {
  root.style.setProperty("--mouse-x", `${event.clientX}px`);
  root.style.setProperty("--mouse-y", `${event.clientY}px`);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
updateProgress();
