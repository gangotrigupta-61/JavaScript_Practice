let url="https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let fact=await getfacts();
    let p=document.querySelector("#result");
    p.innerHTML=fact;
});

async function getfacts() {
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        console.log("Error is ", err);
        return "No factFound";
    }
}



