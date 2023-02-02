const downBtn = document.querySelector(".downBtn");
const upBtn = document.querySelector(".upBtn");
const num = document.querySelector(".num");

let count = 0;

num.innerText = `${count}`.padStart(2,0);

// 커링을 활용해서 onclick을 구현
// type ("down", "up")
const onClickButton = (type) => {
  return () => {
    if(type === "down"){
      if(count === 0){
        alert("0보다 작을 순 없어요 🐻");
        return;
      }
      count--;
      const targetCount = count;
      num.innerText = `${targetCount}`.padStart(2, "0");
    }
    else if (type === "up") {
      count++; // 1을 증가
      const targetCount = count; // targetCount에 count를 할당

      num.innerText = `${targetCount}`.padStart(2, "0");
    } else alert("Down 혹은 Up을 입력해주세요.");
  };
};

downBtn.onclick = onClickButton("down");
upBtn.onclick = onClickButton("up");