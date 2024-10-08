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
    imgElement.src = temple.imageUrl;
    imgElement.alt = `image ${temple.templeName}`;
    imgElement.loading = "lazy";

    const captionElement = document.createElement("figcaption");
    captionElement.classList.add("main-caption");
    captionElement.textContent = temple.templeName;

    const locationElement = document.createElement("figcaption");
    locationElement.textContent = `Location: ${temple.location}`;

    const dedicatedElement = document.createElement("figcaption");
    dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;

    const sizeElement = document.createElement("figcaption");
    sizeElement.textContent = `Size: ${temple.area}`;

    figureElement.appendChild(imgElement);
    figureElement.appendChild(captionElement);
    figureElement.appendChild(locationElement);
    figureElement.appendChild(dedicatedElement);
    figureElement.appendChild(sizeElement);

    galery.appendChild(figureElement);
  });
}

createGallery();

// week03
async function getOldTemples() {
  const galery = document.getElementById("temples");
  galery.innerHTML = "";
  galery.textContent = "";
  const templesData = await fetchData();
  const oldTemples = templesData.filter((temple) => temple.date < 2000);

  oldTemples.forEach((temple) => {
    const figureElement = document.createElement("figure");

    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = `image ${temple.templeName}`;
    imgElement.loading = "lazy";

    const captionElement = document.createElement("figcaption");
    captionElement.classList.add("main-caption");
    captionElement.textContent = temple.templeName;

    const locationElement = document.createElement("figcaption");
    locationElement.textContent = `Location: ${temple.location}`;

    const dedicatedElement = document.createElement("figcaption");
    dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;

    const sizeElement = document.createElement("figcaption");
    sizeElement.textContent = `Size: ${temple.area}`;

    figureElement.appendChild(imgElement);
    figureElement.appendChild(captionElement);
    figureElement.appendChild(locationElement);
    figureElement.appendChild(dedicatedElement);
    figureElement.appendChild(sizeElement);

    galery.appendChild(figureElement);
  });
}

async function getNewTemples() {
  const galery = document.getElementById("temples");
  galery.innerHTML = "";
  galery.textContent = "";
  const templesData = await fetchData();
  const newTemples = templesData.filter((temple) => temple.date > 2000);

  newTemples.forEach((temple) => {
    const figureElement = document.createElement("figure");

    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = `image ${temple.templeName}`;
    imgElement.loading = "lazy";

    const captionElement = document.createElement("figcaption");
    captionElement.classList.add("main-caption");
    captionElement.textContent = temple.templeName;

    const locationElement = document.createElement("figcaption");
    locationElement.textContent = `Location: ${temple.location}`;

    const dedicatedElement = document.createElement("figcaption");
    dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;

    const sizeElement = document.createElement("figcaption");
    sizeElement.textContent = `Size: ${temple.area}`;

    figureElement.appendChild(imgElement);
    figureElement.appendChild(captionElement);
    figureElement.appendChild(locationElement);
    figureElement.appendChild(dedicatedElement);
    figureElement.appendChild(sizeElement);

    galery.appendChild(figureElement);
  });
}

async function getLargeTemples() {
  const galery = document.getElementById("temples");
  galery.innerHTML = "";
  galery.textContent = "";
  const templesData = await fetchData();
  const largeTemples = templesData.filter((temple) => temple.area > 20000);

  largeTemples.forEach((temple) => {
    const figureElement = document.createElement("figure");

    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = `image ${temple.templeName}`;
    imgElement.loading = "lazy";

    const captionElement = document.createElement("figcaption");
    captionElement.classList.add("main-caption");
    captionElement.textContent = temple.templeName;

    const locationElement = document.createElement("figcaption");
    locationElement.textContent = `Location: ${temple.location}`;

    const dedicatedElement = document.createElement("figcaption");
    dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;

    const sizeElement = document.createElement("figcaption");
    sizeElement.textContent = `Size: ${temple.area}`;

    figureElement.appendChild(imgElement);
    figureElement.appendChild(captionElement);
    figureElement.appendChild(locationElement);
    figureElement.appendChild(dedicatedElement);
    figureElement.appendChild(sizeElement);

    galery.appendChild(figureElement);
  });
}

const oldT = document.getElementById("old");
const largeT = document.getElementById("large");
const newT = document.getElementById("new");
const homeT = document.getElementById("home");
const currentSelection = document.getElementById("current-selection");

oldT.addEventListener("click", () => {
  currentSelection.textContent = "Old Temples";
  getOldTemples();
});

newT.addEventListener("click", () => {
  currentSelection.textContent = "New Temples";
  getNewTemples();
});

largeT.addEventListener("click", () => {
  currentSelection.textContent = "Large Temples";
  getLargeTemples();
});

homeT.addEventListener("click", () => {
  currentSelection.textContent = "Home";
  const galery = document.getElementById("temples");
  galery.innerHTML = "";
  galery.textContent = "";
  createGallery();
});
