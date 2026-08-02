console.log("GANGOTRI")

let a=10;
let b=20;

console.log(`Sum is ${a+b} .`);

let firstname="Gangotri";
let lastname="Gupta";

console.log(`Your name is ${firstname} ${lastname}` );

let s='XL';

if(s=='XL'){
    console.log(250);
}
else if(s=='L'){
    console.log(200);
}
else if(s=='M'){
    console.log(100);
}
else{
    console.log(50);
}

s="ansh";
if(s[0]=='a' && s.length>3){
    console.log("Good String");
}
else{
    console.log("Nope");
}


alert("Hello");
console.error("This is error msg");
console.warn("This is warm msg");

let fn=prompt("Enter your name:");
console.log( `${fn} is a successful girl`);