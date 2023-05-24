// 동적 타입
let foo = 42
console.log(typeof foo);

foo = "apple"
console.log(typeof foo);

foo = true;
console.log(typeof foo);


// 원시 타입, Primitive Type
// 문자열 String
const name = "hyunjun";

// Number
const age = 30;

// Boolean
const hasJob = false;

// null
const house = null;

// undefined 
let anything;

// Symbol
const sym = Symbol();

// 참조 타입, Reference Type
// Array 배열
const hobbies = ['walking', 'books'];

// Object 객체
const address = {
    province: "경기도",
    city: "수원시"
}

// 배열도 Object의 하나이기 때문에 typeof 사용 시 Object로 리턴됨.
console.log(typeof(hobbies));

// 배열인지 확인 시 isArray 함수 확인
console.log(Array.isArray(hobbies));

