// console.log(gretting);
// var gretting = 'hello';
// let gretting = 'hello';

func();

function func(){
    console.log('hoisting test');
}



func2(); // 결과 : Uncaught TypeError: func2 is not a function

var func2 = function(){
    console.log("func2")
}

func3(); // 결과 : hoisting.js:11 Uncaught ReferenceError: Cannot access 'func2' before initialization

let func3 = function(){
    console.log("func3");
}

