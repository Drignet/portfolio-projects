const myTask = document.querySelector('#my-task');
const taskBtn = document.querySelector('#task-button');
const emptyBtn = document.querySelector('.empty');
let uncompletedTask = document.querySelector('.uncompleted-task');
const items = []

taskBtn.addEventListener("click", () => {
  const input = myTask.value;
  if(!input){
    document.querySelector('.pop-error').style.display = "block";
    return 
  }else{
    document.querySelector('.pop-error').style.display = "none";
  }
  items.push(input)
  uncompletedTask.innerHTML += `<div class="tasks-input"><p><span class="thumbup"><img src="images/good.svg" alt="thumbup icon" width="20"></span>${input}</p><div class="delete-done-div"><span class="delete"><img src="images/delete.svg" alt="delete icon" width="20"></span><span class="done"><img src="images/done.svg" alt="done icon" width="20"></span></div></div>`
  document.querySelector('#reset').reset();


Array.from(uncompletedTask.children).forEach(task => {
  const para = task.children[0]
  const thumbup = task.children[0].children[0]
  const del = task.children[1].children[0]
  const done = task.children[1].children[1]
  done.addEventListener("click", (e) => {
    if(e.target){
      para.style.textDecoration = "line-through"
      para.style.textDecorationColor = "green"
      para.style.textDecorationThickness = "3px"
      thumbup.classList.add('show-thumbup')
    }
    
  })
  
});

Array.from(uncompletedTask.children).forEach(task => {
  const para = task.children[0]
  const del = task.children[1].children[0]
  const done = task.children[1].children[1]
  del.addEventListener("click", (e) => {
    if(e.target){
      task.remove()
    }
    
  })
  
});

})

emptyBtn.addEventListener('click', () =>{
  uncompletedTask.innerHTML = ""
})

setInterval(() => {
  emptyBtn.style.animation = "scale-in-out 0.3s linear 4 alternate"
}, 30000);



