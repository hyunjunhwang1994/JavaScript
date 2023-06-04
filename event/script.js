// event
//문서가 load 될 때 이 함수를 실행
window.onload = function () {
  //id가 'text'인 요소를 리턴
  let text = document.getElementById("text");

  text.innerText = "HTML 문서 loaded";
};

const aElement = document.querySelector("a");
aElement.addEventListener("click", () => {
  alert("a element clicked");
});

const buttonElement = document.querySelector(".btn2");

buttonElement.addEventListener("click", (event) => {
  let val;
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  val = event.type;

  //윈도우로부터의 거리 좌표
  val = event.clientY;
  //요소로부터의 거리 좌표
  val = event.offsetY;

  // console.log(event);
  console.log(val);
});

let btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  let val;
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  val = event.type;

  //윈도우로부터의 거리 좌표
  val = event.clientX;
  val = event.clientY;

  //요소로부터의 거리 좌표
  val = event.offsetX;
  val = event.offsetY;

  console.log(val);
});
