// Function without argument
function rolldice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}
rolldice();

// Function with argument
function printinfo( name,age){
   console.log(`${name}'s age is ${age}`);
}
printinfo("GANGOTRI",19);
// if we do not provide the expected argument then it will automatically take undefined

printinfo(28);
printinfo();


// Function that prints table
function table(n){
    for (let i=1; i<=10; i++){
          console.log(`${n}*${i}=${n*i}`);
    }
}
table(7);

// RETURN 
function sum(a,b){
    return a+b;
}
console.log(sum(20,5));
console.log(sum(sum(2,4),3));

// function that returns the concationation of an array
let array=["hi","my","name", "is","Gangotri"];
function concat(arr){
let ans="";
for(let i=0; i<array.length; i++){
    ans+=array[i];
}

return ans;
}

console.log(`String is ${concat(array)}`);



// SCOPE
let summ=54;
function calsum(a,b){
    // let summ=a+b;
    console.log(summ);
}
calsum(3,5);

// LEXICAL SCOPE
function outerfunc(){
    let x=5;
    let y=6;
    function innerfunc(){
        // let z=1;
        console.log(x);
        console.log(y);
    }
    // console.log(z);
    innerfunc();
}
outerfunc();

let greet="hello";

function changGreet(){
    let greet="namaste";
    console.log(greet);

    function ineergreet(){
        console.log(greet);
    }
    ineergreet();
}
console.log(greet);
changGreet();


// function expression

let add=function(a,b){
    return a+b;
}

let greeet=function(){
    console.log("lhello")
}
greeet();

// HIGHER ORDER FUNCTION

function multipleGreet(func,count){
    for(let i=0; i<count; i++){
        func();
    }
};
let greett=function(){
    console.log("Hello");
};
multipleGreet(greett,20);


function oddorEvenFactory(request){
    if(request=="odd"){
      return function(n){
        console.log(!(n%2 == 0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}

let requestt="odd";
oddorEvenFactory(requestt);

// Methods

const calculator={
    num:20,
   add:function(a,b){
    return a+b;
   },
   sub:function(a,b){
      return a-b;
   },
   mul:function(a,b){
    return a*b;
   },
   divide:function(a,b){
    return a/b;
   }
};

const calculatorr={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    dividee(a,b){
        return a/b;
    },
    a:20

}

