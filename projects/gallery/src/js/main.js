const main = document.querySelector('main');
const search = document.querySelector('#search');
const images = ["graphic-fly", "graphic-food", "graphic-look","graphic-mask", "graphic-me", "graphic-zip","mobile-agric", "mobile-day", "mobile-koko","website-fred", "website-love", "website-think", "website-yoga"];

const all = document.querySelector("#all");
const website = document.querySelector("#website");
const mobile = document.querySelector("#mobile");
const graphic = document.querySelector("#graphic");

let img;
images.forEach(image => {
  img = document.createElement('img');
  img.src = `./public/images/${image}.png`;
  img.width = "150";
  img.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
  main.appendChild(img)
  })
  
  all.addEventListener("click", () => {
    main.innerHTML = ""
    images.forEach(image => {
  img = document.createElement('img');
  img.src = `./public/images/${image}.png`;
  img.width = "150";
  img.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
  main.appendChild(img)
  })
  })
  
  website.addEventListener("click", () => {
  main.innerHTML = "";
  let webImages = images.filter(image => image.includes("website"));
  webImages.forEach(webImage => {
    const img = document.createElement('img');
    img.src = `./public/images/${webImage}.png`;
    img.width = "150";
    img.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    main.appendChild(img);
  });
});

mobile.addEventListener("click", () => {
  main.innerHTML = "";
  let mobImages = images.filter(image => image.includes("mobile"));
  mobImages.forEach(mobImage => {
    const img = document.createElement('img');
    img.src = `./public/images/${mobImage}.png`;
    img.width = "150";
    img.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    main.appendChild(img);
  });
});

graphic.addEventListener("click", () => {
  main.innerHTML = "";
  let graImages = images.filter(image => image.includes("graphic"));
  graImages.forEach(graImage => {
    const img = document.createElement('img'); 
    img.src = `./public/images/${graImage}.png`;
    img.width = "150";
    img.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    main.appendChild(img);
  });
});

search.addEventListener("keyup", () => {
  let searchValue = search.value.toLowerCase()
  main.innerHTML = "";
  let searchImages = images.filter(image => image.match(searchValue));
  searchImages.forEach(searchImage => {
    const img = document.createElement('img'); 
    img.src = `./public/images/${searchImage}.png`;
    img.width = "150";
    img.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    main.appendChild(img);
  });
});






