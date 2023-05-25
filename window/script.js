// window object
let val;

// 윈도우 창 내용 부분 높이
val = window.innerHeight;
// 윈도우 창 내용 부분 넓이
val = window.innerWidth;

// 윈도우 전체 부분 높이 (주소창, 즐겨찾기 부분 포함)
val = window.outerHeight;
// 윈도우 전체 부분 넓이
val = window.outerWidth;


// 세로 스크롤 현재 위치를 픽셀 단위로 반환.
val = window.scrollY;
// 가로 스크롤 현재 위치를 픽셀 단위로 반환.
val = window.screenX;

// location: 현재 url에 대한 정보
val = window.location.port;
val = window.location.protocol;
// 현재 url 확인
val = window.location.href;
// url 이동
// window.location.href = "http://google.com/";

// 히스토리 정보를 저장하는 객체
val = window.history

// 뒤로가기
// history.back();
// 앞으로가기
// history.forward();

// navigator: 브라우저에 대한 정보
val = window.navigator;
val = window.navigator.userAgent;
val = window.navigator.language;

console.log(val);

// var와 함수로 window 객체의 프로퍼티로 만들기
var greeting = 'hello';

function doGreeting(){
    return greeting;
}

console.log(window.greeting); // hello
console.log(window.doGreeting()); // hello

