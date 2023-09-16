const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");
yearEl.textContent = currentYear;

const headerEl = document.querySelector(".section-header");
const btnMobile = document.querySelector(".btn-mob-nav");
btnMobile.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// Hero Section Observer
// Sticky Nav
const heroSectionEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.querySelector(".section-header").classList.add("sticky");
    } else if (ent.isIntersecting) {
      document.querySelector(".section-header").classList.remove("sticky");
    }
  },
  {
    // viewport
    root: null,
    threshold: 0,
  }
);
obs.observe(heroSectionEl);
