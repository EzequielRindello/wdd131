// dates
let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;

document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("currentyear");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});

// movile menu
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// json galery
async function fetchData() {
  try {
    const data = await fetch("./temples.json");
    const response = await data.json();
    return response.temples;
  } catch (error) {
    console.log(error);
  }
}

async function createGallery() {
  const galery = document.getElementById("temples");
  const templesData = await fetchData();

  templesData.forEach((temple) => {
    const figureElement = document.createElement("figure");

    const imgElement = document.createElement("img");
    imgElement.src = temple.url;
    imgElement.alt = `image ${temple.name}`;

    const captionElement = document.createElement("figcaption");
    captionElement.textContent = temple.name; 

    figureElement.appendChild(imgElement);
    figureElement.appendChild(captionElement);

    galery.appendChild(figureElement);
  });
}

createGallery();