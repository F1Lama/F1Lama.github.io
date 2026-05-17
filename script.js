
// DARK MODE
function toggleMode(){
  document.body.classList.toggle("dark-mode");
}

// SCROLL REVEAL
const elements = document.querySelectorAll(".reveal");

function reveal(){
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();


// CUSTOM CURSOR
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  outline.style.left = e.clientX + "px";
  outline.style.top = e.clientY + "px";
});