// hamburger menu scripts
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// banner img
function changeImage() {
  var img = document.getElementById("responsive-image");
  if (img) {
    if (window.innerWidth <= 785) {
      img.src = "images/movile-banner.PNG";
    } else {
      img.src = "images/banner.PNG";
    }
  }
}

window.onload = changeImage;
window.onresize = changeImage;

// card on-clic
document.addEventListener("DOMContentLoaded", function () {
  const promoCards = document.querySelectorAll(".card");
  const logoImg = document.querySelector(".logo");

  if (promoCards) {
    promoCards.forEach((promoCard) => {
      promoCard.addEventListener("click", function () {
        window.location.href = "promo.html";
      });
    });
  }

  if (logoImg) {
    logoImg.addEventListener("click", () => {
      window.location.href = "royalburger.html";
    });
  }
});

// dinamic code for burger
function generatePromoCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let promoCode = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    promoCode += characters[randomIndex];
  }

  return promoCode;
}

document.addEventListener("DOMContentLoaded", function () {
  const randomCode = generatePromoCode(8);
  const code = document.getElementById("code");
  if (code) {
    code.textContent = randomCode;
  }
});

// dinamic menu

const burgers = document.getElementById("burgers");
const longs = document.getElementById("longs");
const salads = document.getElementById("salads");

if (salads || longs || burgers) {
  async function getMenu() {
    try {
      const response = await fetch("./menu.json");
      const data = await response.json();
      createMenu(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  function createMenu(items) {
    items.forEach((item) => {
      const menuItem = document.createElement("div");

      const itemBr = document.createElement("br");

      const itemImg = document.createElement("img");
      itemImg.src = item.url;
      itemImg.alt = item.name;
      itemImg.loading = "lazy";

      const itemTitle = document.createElement("h3");
      itemTitle.textContent = item.name;

      const itemPrice = document.createElement("strong");
      itemPrice.textContent = `$${item.price}`;

      menuItem.appendChild(itemImg);
      menuItem.appendChild(itemPrice);
      menuItem.appendChild(itemTitle);

      if (item.type === "burger" && burgers) {
        burgers.appendChild(menuItem);
      } else if (item.type === "long" && longs) {
        longs.appendChild(menuItem);
      } else if (item.type === "salad" && salads) {
        salads.appendChild(menuItem);
      }
    });
  }

  getMenu();

  ScrollReveal().reveal(".h1-pages", {
    origin: "left",
    distance: "40px",
    duration: 800,
    delay: 300,
    opacity: 0,
  });
  ScrollReveal().reveal("#burgers", {
    origin: "right",
    distance: "40px",
    duration: 800,
    opacity: 0,
    interval: 200,
  });
  ScrollReveal().reveal("#longs", {
    origin: "bottom",
    distance: "50px",
    duration: 900,
    delay: 300,
    opacity: 0,
  });
  ScrollReveal().reveal("#salads", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    opacity: 0,
    interval: 150,
  });
}

// intit ScrollReveal and config animations
const slider = document.querySelector(".slider");
if (slider) {
  ScrollReveal().reveal(".h1-pages", {
    origin: "left",
    distance: "40px",
    duration: 800,
    delay: 300,
    opacity: 0,
  });
  ScrollReveal().reveal(".card", {
    origin: "right",
    distance: "40px",
    duration: 800,
    opacity: 0,
    interval: 200,
  });
  ScrollReveal().reveal(".app-card", {
    origin: "bottom",
    distance: "50px",
    duration: 900,
    delay: 300,
    opacity: 0,
  });
  ScrollReveal().reveal(".fotter-card", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    opacity: 0,
    interval: 150,
  });
}

// toastify
const myForm = document.getElementById("myForm");
if (myForm) {
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    Toastify({
      text: "Form sent successfully!",
      duration: 6000,
      gravity: "top",
      position: "center",
      backgroundColor: "#4caf50",
      className: "info",
    }).showToast();

    setTimeout(function () {
      window.location.href = "royalburger.html";
    }, 5000);
  });
}
