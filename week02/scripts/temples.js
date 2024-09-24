let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;

document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("currentyear");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});

// menu
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});
