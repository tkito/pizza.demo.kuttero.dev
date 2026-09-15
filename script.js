document.getElementById("year").textContent = new Date().getFullYear();

const hero = document.querySelector(".hero");
const visual = document.querySelector(".hero-visual");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    visual.style.setProperty("--pizza-x", `${x * 10}px`);
    visual.style.setProperty("--pizza-y", `${y * 10}px`);
  });

  hero.addEventListener("pointerleave", () => {
    visual.style.setProperty("--pizza-x", "0px");
    visual.style.setProperty("--pizza-y", "0px");
  });
}
