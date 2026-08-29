function hello(){
    console.log("Inside hello Function");
    console.log("hello");
}

function demo(){
    console.log("Calling Hello Function");
    hello();
}

// console.log("Calling demo function");
// demo();
// console.log("DoneBye!!");

// setTimeout(()=>{
//     console.log("Gangotri")
// },2000);

// console.log("JS IS A SINGLE THREADED AND ASYNCHRONOUS LANGUAGE!!")


// let h=document.querySelector(".heading");
// setTimeout(()=>{
//     h.style.color="Red";
// },1000);
// setTimeout(()=>{
//     h.style.color="Yellow";
// },2000);
// setTimeout(()=>{
//     h.style.color="Blue";
//     console.log("Final Blue");
// },3000);

//  using callback hell

// function changeColor(color,delay,nextColorchange){
//     setTimeout(()=>{
//         h.style.color=color;
//         if(nextColorchange)nextColorchange();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("green",1000);
//         })
//     })
// });

// PROMISES
function savetoDB(data,success,failure){
    let internetspeed=Math.floor(Math.random()*10)+1;
    if(internetspeed>4){
        success();
    }
    else{
        failure();
    }
};

// savetoDB(
//     "Gangotri",
//     ()=>{
//         console.log("Success your data was saved");
//         savetoDB(
//             "Hello",
//             ()=>{
//                 console.log("Success2: data2 saved");
//                 savetoDB(
//                     "Shubhi",
//                     ()=>{
//                         console.log("Success data3 saved");
//                     },

//                     ()=>{
//                         console.log("Failure3: weak connection");
//                     }
//                 );
//             },

//             ()=>{
//                    console.log("Failure2 : weak connection");
//             }
           
//         );
//     },
//    ()=>{
//         console.log("Failure: weak connection, data not saved");
//     }
// );


// using promises

function savetoDB2(data){
    return new Promise ((resolve,reject)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            resolve("SUCCESS");
        }
        else{
            reject("FAILURE");
        }
    })
};

// savetoDB2("Gangotri");

// savetoDB2("ApnaCollege!!")
// .then(()=>{
//     console.log("Promise fulfilled!!");  
// })
// .catch(()=>{
//     console.log("Promise rejected!!");
   
// })

// Do not apply semicolon else error will come

// savetoDB2("Apnacollege")
// .then(()=>{
//     console.log("DATA was saved!!");
//     return savetoDB2("Hello world!!");
// })
// .then(()=>{
//     console.log("Data2 saved!!");
//     return savetoDB2("Gangotri Gupta");
// })
// .then(()=>{
//     console.log("Data3 saved!!");
// })
// .catch(()=>{
//     console.log("Promise was rejected!!");
// });


// Promises are rejected and resolved with some data (valid results/errors)

savetoDB2("Gangotri!!")
.then((result)=>{
    console.log("Data1 saved");
    console.log("Result of promise:",result);
    return savetoDB2("Subhi");
})
.then((result)=>{
    console.log("Data2 saved");
    console.log("result of promise:",result);
    return savetoDB2("Shivam");
})
.then((result)=>{
    console.log("Data3 saved");
    console.log("Result of promise:", result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("Error of promise:", error);
});

// refactoring old code

let h1=document.querySelector("h1");
function changeColor(color,delay){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
          h1.style.color=color;
          resolve("Color changed!!");
    },delay);
    // here no chance of failure of code so we can skip reject
 });
}

// changeColor("red",2000)
// .then((result)=>{
//     console.log("red!!");
//     console.log("Result :", result);
//     return changeColor("yellow",2000);
// })
// .then((result)=>{
//    console.log("yellow!!");
//     console.log("Result :", result);
//     return changeColor("blue",2000);
// })
// .then((result)=>{
//  console.log("blue!!");
//     console.log("Result:", result);
//     return changeColor("green",2000);
// })
// .then(()=>{
//     console.log("Green!!");
// })
// .catch((error)=>{
//     console.log("Error is:",error);
// })

// NOW by using await this has become very easy to write in syntax

async function democolor() {
    await changeColor("Red",1000);
    await changeColor("Orange", 1000);
    await changeColor("green", 1000);
    changeColor("yellow",1000);
}

democolor();


// ASYNC

async function greet(){
    console.log("GREET HELLO");
    return "hello";
}

// console.log(greet());
greet()
.then((result)=>{
    console.log("GREET HELLO", result);
})
.catch((error)=>{
    console.log("GREET ERROR:", error);
});

// AWAIT 
 
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
             console.log(num);
             resolve();
        },1000);
    });
};

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
demo();


let h4=document.querySelector("h4");
function changeColour(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("Promise rejected");
            }
            h4.style.color=color;
            resolve("Color Changed!!");
        },delay);
    });
};

async function c(){
    try{
        await changeColour("red",1000);
        await changeColour("orange",1000);
        await changeColour("green",1000);
    }
    catch(error){
        console.log("Error caught:");
        console.log(error);
    }
}


c();




















