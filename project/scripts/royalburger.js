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
