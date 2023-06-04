// document
let val;

// // 1.HTML 객체의 선택
val = document; // document 객체를 반환.
val = document.documentElement; // <html> 요소를 반환.
val = document.title; // <title> 요소를 반환.
val = document.head; // <head> 요소를 반환.
val = document.body // <body> 요소를 반환.
val = document.doctype // 웹 페이지의 문서 형식을 반환.
val = document.URL; // 웹 페이지의 URL 주소를 반환.
val = document.baseURI // 웹 페이지의 절대 URI 경로.
val = document.referrer; // 링크(linking)되어 있는 문서의 URI를 반환.
val = document.readyState; // 웹 페이지의 로딩 상태(loading status)를 반환.
val = document.lastModified // 웹 페이지의 마지막 갱신 날짜 및 시간을 반환.
val = document.implementation; // 웹 페이지의 DOM 구현을 반환.
val = document.embeds; // <embed> 요소를 모두 반환.
val = document.cookie // 웹 페이지의 쿠키를 반환.

val = document.forms // <form> 요소들을 반환.
val = document.forms[0].id // <form> 요소의 id를 반환.
val = document.forms[0][0].id // <form> 요소안의 요소의 id를 반환.
val = document.forms[0].action // <form> 요소의 Action Url을 반환.
val = document.forms[0].method // <form> 요소의 Action Method를 반환.
val = document.forms[0][3].classList // <form> 요소안의 요소들의 classList를 반환.
val = document.forms[0][2].className // <form> 요소안의 요소들의 className들을 반환.

val = document.links; // <a> 요소들을 반환.
val = document.links[0]; // <a> 요소 중 하나를 반환.
val = document.links[0].id; // <a> 요소 중 하나의 id를 반환.
val = document.links[0].classList[0]; // <a> 요소 중 하나의 classList[0]을 반환.
val = document.links[1].className[2]; // <a> 요소 중 하나의 className[2]을 반환.

val = document.images; // <img> 태그들을 반환
val = document.scripts; // <script> 태그들을 반환
val = document.scripts[0].getAttribute('src'); // script의 src 확인
// console.log(val);



// 2.HTML 요소의 선택
// document.getElementsByTagName('태그 이름') // 해당 태그 이름의 요소를 모두 선택함.
// document.getElementById('아이디') // 해당 아이디를 가진 요소를 선택함.
// document.getElementsByClassName('클래스 이름') // 해당 클래스에 속한 요소를 모두 선택함.
// document.getElementsByName('name 속성값') // 해당 name 속성값을 가지는 요소를 모두 선택함.
// document.querySelector('선택자') // 해당 선택자로 선택되는 요소를 선택함.
// document.querySelectorAll('선택자') // 해당 선택자로 선택되는 요소를 모두 선택함.

// 3.HTML 요소의 생성
// document.createElement('HTML 요소') // 지정된 HTML 요소를 생성함.
// document.write('텍스트') // HTML 출력 스트림을 통해 텍스트를 출력함./

// 4.HTML 이벤트 핸들러 추가
// document.getElementById('id').onclick = function(){
    // alert("클릭!")
// }


// 5. HTML 컨텐츠 조작
document.textContent; // 해당 노드가 가지고 있는 텍스트 값 그대로 보여줍니다. (display:none일 경우 숨겨진 텍스트도 보여집니다.)
document.innerText; // 사용자에게 보여지는 텍스트 값을 읽어오며 여러 공백은 무시하고 하나의 공백만 처리합니다.
document.innerHTML; // HTML 까지 같이 보여줍니다.

let container = document.getElementById('test-container')
// console.log("textContent: " + container.textContent);
// console.log("innerText: " + container.innerText);
// console.log("innerHTML: " + container.innerHTML);


// 활용 예시
// 1.
let lists = document.getElementsByTagName('li') // 해당 태그 이름의 요소를 모두 선택함.
// console.log(lists); // Collection

// Collection: forEach 사용 불가, Uncaught TypeError: lists.forEach is not a function
// lists.forEach((list) => {
//     console.log(list);
// })

// Collection -> Array: forEach 사용 가능
lists = Array.from(lists)
// console.log(lists);


// 배열에서 사용하는 메서드 사용 가능
lists.forEach((list, index) => {
    list.textContent = `${index}. ${list.textContent}`
})

// li의 홀수 번째 태그의 내용만 가지고옴
const liOdd = document.querySelectorAll('li:nth-child(odd)');

// 홀수 번째에 회색 배경 처리하기.
liOdd.forEach((li) =>{
    li.style.background = 'gray';
})

//2.
let onclickLists = document.getElementsByClassName('list-group-item');
onclickLists = Array.from(onclickLists)

onclickLists.forEach((list) =>{
    list.onclick = function(){
        console.log(`${list.textContent}`);
    }
})


// 3. 
const items = document.getElementsByClassName('list-group-item')
// console.log(items);

// items[0].style.color = 'blue'
// items[3].textContent = 'Hi'






