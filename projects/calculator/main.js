const screen = document.querySelector('.screen');

const btnsDiv = document.querySelector('.btns-div');
const numBtns = document.querySelectorAll('.btn-num');
const memoryAddBtn  = document.querySelector('#del');

btnsDiv.addEventListener("click", (e) => {
  if(e.target.id === 'mem-clear'){
    clearScreen()
  }
  
  if(e.target.classList.contains('btn-num')){
    getValuesOnScreen(e)
  }
  
  if(e.target.id === 'equal'){
    clickEqualBtn()
  }
  
  if (e.target.classList.contains('btn-opt')) {
    clickOptBtn(e);
  }
  
  if (e.target.id === "del") {
    del()
  }
 
})


function clearScreen(){
 screen.children[0].innerHTML = "";
 screen.children[1].innerHTML = "";
}

function getValuesOnScreen(e){
  let value = e.target.innerHTML
  screen.children[0].innerHTML += value;
}


function clickEqualBtn(){
  console.log(screen.children[0].innerHTML)
  // if(screen.children[0].innerHTML.includes("0/0")){
  //   screen.children[1].innerHTML = "Indeterminate";
  // }else{
    screen.children[1].innerHTML = eval(eval(screen.children[0].innerHTML).toPrecision(10))
//}
  
}

function clickOptBtn(e){
  let value = e.target.value;
    screen.children[0].innerHTML += value;
}

function del(){
  screen.children[0].innerHTML = screen.children[0].innerHTML.slice(0,-1);
}



