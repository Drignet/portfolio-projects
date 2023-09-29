const circles = document.querySelectorAll('.circle');
const shuffleBtn = document.querySelector('#shuffle-button');

circles.forEach(circle => {
  circle.addEventListener("click", (e) =>{
   if(e.target.classList.contains('circle-3')){
     console.log('yes')
   }
})
})