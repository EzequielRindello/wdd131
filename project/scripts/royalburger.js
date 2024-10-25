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

      const itemImg = document.createElement("img");
      itemImg.src = item.url;
      itemImg.alt = item.name;

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
}
