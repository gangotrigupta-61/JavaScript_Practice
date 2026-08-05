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


// alert("Hello");
console.error("This is error msg");
console.warn("This is warm msg");

// let fn=prompt("Enter your name:");
// console.log( `${fn} is a successful girl`);



// STRING METHODS  DAY2

// let password=prompt("Set your password:");
// console.log(password.trim());
// let newP=password.trim();
// console.log(newP);
// console.log(password);


// let msg="ILoveCoding";

// msg.indexOf('o')

// msg.indexOf('a')
// -1

// let pa="   shi   "

// pa.trim().toUpperCase()
// 'SHI'
// msg.slice(2)
// 'oveCoding'
// msg.slice(4,9)
// 'eCodi'
// msg.slice(-2)
// 'ng'
// msg.replace("love","do")
// 'ILoveCoding'

// msg.replace("love","do");
// 'ILoveCoding'
// msg.replace('o','x');
// 'ILxveCoding'

// msg.replace("Love","do");
// 'IdoCoding'

// msg.replace("Love","do","Coding","CODING");
// 'IdoCoding'

// let fruit="mango";
// undefined
// fruit
// 'mango'
// fruit.repeat(5)
// 'mangomangomangomangomango'


// let p="ApnaCollege";
// undefined
// p.slice(4,11)
// 'College'
// p.slice(4,11).replaceAll('l','t')
// 'Cottege'



for(let i=0; i<5; i++){
    console.log(i);
}

for(let i=1; i<11; i++){
    console.log(`3*${i}=${3*i};`);
}

for(let i=1; i<4; i++){
    for(let j=1; j<4; j++){
        console.log(j);
    }
};

let i=1;
while(i<=5){
    console.log(i);
    i++;
};

let fruits=["mango","apple","banana","litchi","orange"];

for(let fruit of fruits){
    console.log(fruit);
}

for(let char of "Gangotri"){
    console.log(char);
}