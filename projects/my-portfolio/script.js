const mobileIcon = document.querySelector(".menu-icon");
const mainMenu = document.querySelector(".main-menu");

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const images = ['work-1','work-2','work-3'];
const imageProject = document.querySelector('#image-project');

mobileIcon.addEventListener('click', (e) => {
 mainMenu.classList.toggle("show-menu");
});

Array.from(mainMenu.children).forEach(child => {
   child.addEventListener("click", () => {
      mainMenu.classList.remove("show-menu");
   });
});

let currentImage = 0;
nextBtn.addEventListener('click', () => {
  
  currentImage = (currentImage + 1) % images.length
  console.log(imageProject.src = `images/${images[currentImage]}.png`)
})
prevBtn.addEventListener('click', () => {
  
  currentImage = (currentImage - 1 + images.length) % images.length
  console.log(imageProject.src = `images/${images[currentImage]}.png`)
})