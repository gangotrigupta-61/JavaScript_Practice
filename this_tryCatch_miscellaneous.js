// const student={
//     name:"gangotri",
//     age:23,
//     eng:90,
//     math:99,
//     phy:98,
//     avg(){
//         console.log(this);
//         let average=(this.math+this.eng+this.phy)/3;
//         console.log(`${this.name}'s age is ${this.age} and got avg marks ${average}`);
//     },
    
// }

function getavg(){
    // console.log(this);
};



// TRY CATCH
// try{
//     console.log(a);
// }
// catch(e){
//     console.log("error",e);
// }

// ARROW FUNCTION
// const a=()=>{
//     console.log("he");
// }

// a();

// const ad=(a,b)=>{
//     console.log(a+b);
// };

// const cube= n => {return n*n*n};

// ad(2,5);

// Return
//even there is no need to write return keyword
// const cub=n=> (n*n*n);

// console.log(cub(2));


// setTimeout
// console.log("Hello, setTimeout");

//    setTimeout(()=>{console.log("Hi")},2000);

// console.log("Bye , setTimeout");

// setInterval
console.log("Hello, setInterval");

//   let id= setInterval(()=>{
//     console.log("SETINTERVAL1");
//    },2000);

//    console.log(id);

//    let id2=setInterval(()=>{
//             console.log("SETINTERVAL2");
//    },3000);

//    console.log(id2);

console.log("Bye , setInterval");

// clearInterval(id);

// this with arrow functions

const student = {
    name:"Gangotri",
    mark:95,
    prop:this,

    // better way of doing this
    getName:function(){
        console.log(this);
        return this.name;
    },
    // worst way of doing this
    getMarks:()=>{
        console.log(this);
        return this.mark;
    },

    // Nesting

    getInfo1:function(){
        setTimeout(function(){
            console.log(this);
        },2000);
    },

    getInfo2:function(){
        setTimeout(()=>{
           console.log(this);
        },3000);
    }

};

// clearInterval(id);

let sq=(n)=>{
    return n*n;
};

let s = n => n*n;



let idd=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(idd);
    console.log("Completed");
},10000);


