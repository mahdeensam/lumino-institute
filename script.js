// Lumino Institute - light interactivity

// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Scroll-reveal: tag the main blocks, then fade them in on enter
const revealTargets = [
  ".section__title", ".section__sub", ".kicker",
  ".mission__lead", ".mission__points li",
  ".build__col", ".principle", ".pipeline__steps li",
  ".card", ".role", ".roles__note",
  ".cta__title", ".cta__sub", ".cta__actions",
];
const els = document.querySelectorAll(revealTargets.join(","));
els.forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${Math.min((i % 6) * 60, 320)}ms`;
});

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add("is-visible"));
}
