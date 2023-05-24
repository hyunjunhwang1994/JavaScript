// for
for(let i = 0; i < 10; i++){
    if(i === 3) {
        console.log('It is 3');
        continue;
    }

    if(i === 5){
        console.log('5 Stop the loop');
        break;
    }

    console.log('Number ' + i);
}

console.log("===================");

// for in
const user = {
    name: 'hyunjun',
    province: '서울특별시',
    city: "강남구"
}

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}

console.log("===================");

// while
let i = 0;
while(i < 10){
    console.log('Number ' + i);
    i++;
}

console.log("===================");

// do while
i = 0;

do{
    console.log('Number ' + i);
    i++;
}

while(i < 10);

console.log("==================="); 

// Loop Through Array
const locations = ['서울', '부산', '경기도', '대구'];

// for
for (let i = 0; i < locations.length; i++){
    console.log(locations[i]);
}

console.log("==================="); 

// foreach
locations.forEach(function(location, index, array){
    console.log(`${index} : ${location}`);
    console.log(array);
})

console.log("==================="); 

// map
locations.map(function(location, index, array){
    console.log(`${index} : ${location}`);
    console.log(array);
})

