const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const counterView = document.querySelector(".counter-view");

let counter = 0;
const countUP = () => {
  counter++;
  counterView.innerHTML = counter;
}

const countDown = () => {
  if(counter <= 0){
    return alert("0보다 작아질 순 없어요 🐻");
  }
  counter--;
  counterView.innerHTML = counter;
}

upButton.onclick = countUP;
downButton.onclick = countDown;

