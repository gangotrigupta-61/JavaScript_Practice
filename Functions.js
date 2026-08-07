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

