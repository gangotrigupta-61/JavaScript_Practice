let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");

async function dg() {
    let res= await axios.get(url);
    document.querySelector("img").src=res.data.message;
}

dg();

btn.addEventListener("click",async()=>{
    let para=document.querySelector("p");
    para.innerText="";
    console.log("IMAGE GENERATED!!");
    let link= await dogimg();
    let image=document.querySelector("img");
    image.setAttribute("src",link);
    
});

async function dogimg() {
    try{
        let res= await axios.get (url);
        console.log(res);
        
        return res.data.message;
    }
    catch(e){
        console.log("Error is ", e);
    }
    
}
dogimg();
