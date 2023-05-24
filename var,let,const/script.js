// // var : 중복 선언 가능, 재할당 가능

// // 선언
// var v = 'i am var1';
// console.log(v);

// // 중복 선언 가능
// var v = 'i am var2';
// console.log(v);


// // 재할당 가능
// v = 'i am var3';
// console.log(v)


// // Scope
// // var : Function Level Scope
// function func() {

//     if (true) {
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }

// func();

// // Scope에서 벗어났으므로, a가 정의되지 않음.
// // console.log(a);






// // let : 중복 선언 불가, 재할당 가능

// // 선언
// let l = 'i am let1';
// console.log(l);

// // 중복 선언 불가
// // let l = 'i am let2';
// // console.log(l);

// // 재할당 가능
// l = 'i am let3';
// console.log(l)

// // Scope
// // let : Block Level Scope
// function func2(){
//     if (true) {
//         let b = 'b';
//         console.log(b);
//     }

//     // Scope에서 벗어났으므로, b가 정의되지 않음.
//     // console.log(b);
// }

// func2();







// // const : 중복 선언 불가, 재할당 불가
// const c = 'i am const1';
// console.log(c)

// // 중복 선언 불가
// // const c = 'i am const2';
// // console.log(c);

// // 재할당 불가
// // c = 'i am const3';
// // console.log(c);

// // Scope
// // const : Block Level Scope
// function func3(){
//     if (true) {
//         let blockC = 'c';
//         console.log(blockC);
//     }

//     // Scope에서 벗어났으므로, c가 정의되지 않음.
//     // console.log(blockC);
// }

// func3();

//////// 호이스팅

// console.log(gretting);
// var gretting = 'hello';
// let gretting = 'hello';

func();

function func(){
    console.log('hoisting test');
}


