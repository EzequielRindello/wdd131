const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

let lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;
