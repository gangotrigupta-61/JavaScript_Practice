function hello(){
    console.log("Inside hello Function");
    console.log("hello");
}

function demo(){
    console.log("Calling Hello Function");
    hello();
}

console.log("Calling demo function");
demo();
console.log("DoneBye!!");

setTimeout(()=>{
    console.log("Gangotri")
},2000);

console.log("JS IS A SINGLE THREADED AND ASYNCHRONOUS LANGUAGE!!")



let h=document.querySelector(".heading");
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

function changeColor(color,delay,nextColorchange){
    setTimeout(()=>{
        h.style.color=color;
        if(nextColorchange)nextColorchange();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("yellow",1000,()=>{
        changeColor("blue",1000,()=>{
            changeColor("green",1000);
        })
    })
});

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
//     "apnacollege",

//     ()=>{
//         console.log("Success your data was saved!!");
//          savetoDB(
//         "helloworld",

//         ()=>{
//            console.log("Success2 your data was saved!!");

//              savetoDB(
//             "HelloGangotri",
//             ()=>{
//                 console.log("Success3 Done!!");

//             },

//             ()=>{
//                 console.log("Failure3: weakconnection");
//             }
//         );
//     },
// );
//    ()=>{
//     console.log("Failure: weakconnection!!");
//    }
//   )
// );