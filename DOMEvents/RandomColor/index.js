btn=document.querySelector("button");

btn.onclick=()=>{

    console.log("Color");
    let generatedcolor=COLOR();
    console.log(generatedcolor);
    let d=document.querySelector("div");

    d.style.backgroundColor=generatedcolor;
    d.innerText=generatedcolor;

}



function COLOR(){ 

let r=Math.floor(Math.random()*255);
let g=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);
let color=`rgb(${r},${g},${b})`;
  return color;

}

console.log(COLOR());

