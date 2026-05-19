document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     PROJECT FILTER
  ========================= */

  const buttons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-item");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      projects.forEach((project) => {
        if (filter === "all") {
          project.style.display = "block";
        } else {
          project.style.display = project.classList.contains(filter)
            ? "block"
            : "none";
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
});