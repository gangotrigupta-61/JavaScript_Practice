const url="https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        let res=await axios.get(url, {
      headers: {
        Accept: 'application/json'
      }
   });

    //   headers: { Accept: 'application/json' }: This tells the server to bypass rendering the website UI and just send the raw data.

        console.log(res.data.joke);
    }
    catch(err){
        console.log("Error is ", err);
    }
}
getJokes();

let url2="http://universities.hipolabs.com/search?name=middle";

let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);

    let colArr=await getcolleges(country);
    Show(colArr);
});

function Show(colArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getcolleges(country) {
    try{
        let res=await axios.get(url2 + "&country=" + country);
        return res.data;
    }
    catch(e){
        console.log("error:",e);
        return [];
    }
    
}