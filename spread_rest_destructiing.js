let arr=[1,3,4,5,67,8];

// arr
// (6) [1, 3, 4, 5, 67, 8]
// Math.min(arr);
// NaN
// Math.min(...arr);
// 1
// Math.max(...arr);
// 67
// arr.push(19);
// 7
// arr
// (7) [1, 3, 4, 5, 67, 8, 19]
// console.log(arr);
// VM438:1 (7) [1, 3, 4, 5, 67, 8, 19]
// undefined
// console.log(..."apna");
// VM538:1 a p n a
// undefined


// spread with array literals
let newarr=[...arr];

let char=[..."apna"];

let od=[1,3,5,7];
let ev=[2,4,6,8];

let nums=[...od,...ev];
console.log(nums);


// spread with object literals;

const data={
    email:"gan@12.com",
    password:123
}

const datacpy={...data,name:"Gangotri"};
console.log(datacpy);

let array=[1,2,3,4,5];
let obj1={...array};
console.log(obj1);

let obj2={..."hello"};
console.log(obj2);

// REST
function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us:",args[i]);
        
    }
    console.log(args.reduce((sum,el) => {return sum+el} ));
}

sum(1,2,3);


function min(){
    console.log(arguments);
}


// destructuring

let names=["tony","bruce","peter","steve"];

let [winner,runnerup,...others]=names;

console.log(names);
console.log(others);

const student={
    name:"Karan",
    age:14,
    class:9,
    subject:["hindi","english","maths","physics"],
    username:"karan@123",
    password:"abcd"
};

let {username,password}=student;
console.log(student);

let {username:user , password:secret, city:place="Mumbai"}=student;
console.log(student);




