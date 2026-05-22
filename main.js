document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PROJECT FILTER
  ========================= */

  const projectButtons = document.querySelectorAll(".project-btn");
  const projects = document.querySelectorAll(".project-item");

  projectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {

      projectButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      projects.forEach((project) => {
        if (filter === "all" || project.classList.contains(filter)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });

    });
  });

  /* =========================
     CLOSE MOBILE NAVBAR
  ========================= */

  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });

  /* =========================
     SKILLS FILTER
  ========================= */

  const items = document.querySelectorAll('.skill-item');
  const buttons = document.querySelectorAll('.skill-btn');

  function filterSkills(category, clickedBtn = null) {

    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    buttons.forEach(btn => btn.classList.remove('active'));
    if (clickedBtn) clickedBtn.classList.add('active');
  }

  window.filterSkills = filterSkills;

  //  default state
  filterSkills('frontend');

});