const mobileIcon = document.querySelector(".menu-icon");
const mainMenu = document.querySelector(".main-menu");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const images = ["work-1.png", "work-2.png", "work-3.png"];
const imageProject = document.querySelector("#image-project");

const date = document.querySelector(".date");

mobileIcon.addEventListener("click", (e) => {
  mainMenu.classList.toggle("show-menu");
});

Array.from(mainMenu.children).forEach((child) => {
  child.addEventListener("click", () => {
    mainMenu.classList.remove("show-menu");
  });
});

let currentImage = 0;
nextBtn.addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  imageProject.src = `./src/assets/${images[currentImage]}`;
});
prevBtn.addEventListener("click", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  imageProject.src = `./src/assets/${images[currentImage]}`;
});

date.innerHTML = getCurrentDate();

function getCurrentDate() {
  const currentDate = new Date().getFullYear();
  return currentDate;
}
