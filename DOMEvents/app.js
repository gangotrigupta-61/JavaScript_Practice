
// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick=function(){
//     alert("button was clicked");
// };

// btn.onmouseenter=function(){
//     alert("button was clicked");
// };

// let btns=document.querySelectorAll("button");

// for (btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("You entered a button");
//     }
// }

// for(btn of btns){
//     // btn.addEventListener("click",sayHello);

//     btn.addEventListener("dblclick",function(){
//         console.log("You Double Clicked Me!!");
//     });

// }

function sayHello(){
    alert("Hello");
};

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    console.log(event);
    console.log("button clicked!!");

    // console.log(this);
    // console.dir(this);
    // console.dir(this.innerText);

    this.style.backgroundColor="blue";
});


let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

h1.addEventListener("click", changecolor);
h2.addEventListener("click",changecolor);
h3.addEventListener("dblclick",changecolor);

// let inp=document.querySelector("input");
// inp.addEventListener("keyup",function(event){
//     console.log(event);
//     console.log("Key was pressed!!");
//     console.log(event.key);
//     console.log(event.code);


// });


// LETS MOVE THE CHARACTER WITH PRESSING KEYBOARD KEYS

let inp=document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log(event.key);
      let k=event.key;

    if(k=="d" || k=="D"){
        console.log("Move Down");
    }

    else if(k=="r" || k=="R"){
        console.log("Move Right");
    }

    else if(k=="l" || k=="L"){
        console.log("Move Left");
    }

    else if(k=="u" || k=="U"){
        console.log("Move Up");
    }
    else{
        console.log("Remain")
    }

    
     
});






