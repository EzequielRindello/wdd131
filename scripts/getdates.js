function adjustMainPadding() {
  const headerHeight = document.querySelector(".header").offsetHeight;
  document.querySelector("main").style.paddingTop = headerHeight + "px";
}

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Si el usuario hace scroll hacia abajo, oculta el header
    header.classList.add("hide");
  } else {
    // Si el usuario hace scroll hacia arriba, muestra el header
    header.classList.remove("hide");
  }
  
  lastScrollTop = scrollTop;
});


// DOMContentLoaded events
document.addEventListener("DOMContentLoaded", function() {
  const yearElement = document.getElementById("currentyear");
  const currentYear = new Date().getFullYear(); 
  yearElement.textContent = currentYear; 
});
document.addEventListener("DOMContentLoaded", adjustMainPadding);
window.addEventListener("resize", adjustMainPadding);