function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const bigBox = document.querySelector("#boxes")
let width = 30;
let height = 30;


createBtn.addEventListener("click", create);

function create() {
 
  const amount = input.value;
  if (amount < 0 || amount > 100){
    alert("Error");
    return;
  } 
  createBoxes(amount);
  
}

function createBoxes(amount){
    
  for (let i = 1; i <= amount; i++) {
    const newElem = document.createElement("div");
    newElem.style.width;
    newElem.style.height;
    newElem.style.backgroundColor = getRandomHexColor();
    bigBox.append(newElem);
    
    newElem.style.width += 10;
    newElem.style.height += 10;
  }
}


destroyBtn.addEventListener("click", (destroy))
function destroy() {

  input.value = "";
}
  




  
