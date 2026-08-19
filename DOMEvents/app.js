
// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick=function(){
//     alert("button was clicked");
// };

// btn.onmouseenter=function(){
//     alert("button was clicked");
// };

let btns=document.querySelectorAll("button");

// for (btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("You entered a button");
//     }
// }

for(btn of btns){
    // btn.addEventListener("click",sayHello);

    btn.addEventListener("dblclick",function(){
        console.log("You Double Clicked Me!!");
    });

}

function sayHello(){
    alert("Hello");
}




