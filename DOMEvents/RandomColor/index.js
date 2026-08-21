let btn=document.querySelector("button");

// btn.onclick=function(){

btn.addEventListener("click",function(){

    console.log("Color");
     let d=document.querySelector("div");

    let generatedcolor=COLOR();

    d.innerText=generatedcolor;

    console.log(generatedcolor);

    d.style.backgroundColor=generatedcolor;
    
});

function COLOR(){ 
let r=Math.floor(Math.random()*255);
let g=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);
let color=`rgb(${r},${g},${b})`;
  return color;

}




console.log(COLOR());





let p=document.querySelector("p");
p.addEventListener("click", function(){
  console.log("Paragraph was clicked!!");
});

let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(){
  console.log("Mouse inside div");
});
