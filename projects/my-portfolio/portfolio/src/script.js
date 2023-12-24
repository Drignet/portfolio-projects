import work1 from "./assets/work-1.png";
import work2 from "./assets/work-2.png";
import work3 from "./assets/work-3.png";

const mobileIcon = document.querySelector(".menu-icon");
const mainMenu = document.querySelector(".main-menu");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const images = [work1, work2, work3];
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
  imageProject.src = `${images[currentImage]}`;
});
prevBtn.addEventListener("click", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  imageProject.src = `${images[currentImage]}`;
});

date.innerHTML = getCurrentDate();

function getCurrentDate() {
  const currentDate = new Date().getFullYear();
  return currentDate;
}
