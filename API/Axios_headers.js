// const url="https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         let res=await axios.get(url, {
//       headers: {
//         Accept: 'application/json'
//       }
//    });

    //   headers: { Accept: 'application/json' }: This tells the server to bypass rendering the website UI and just send the raw data.

//         console.log(res.data.joke);
//     }
//     catch(err){
//         console.log("Error is ", err);
//     }
// }
// getJokes();

// SEARCH BY COUNTRY

// let url2="http://universities.hipolabs.com/search?name=";

let url2="http://universities.hipolabs.com/search?country=India";

let btn=document.querySelector("button");

// btn.addEventListener("click",async()=>{
//     let country=document.querySelector("input").value;
//     console.log(country);

//     let colArr=await getcolleges(country);
//     Show(colArr);
// });

btn.addEventListener("click", async () => {
    // 1. Capture the input value into a variable named 'state'
    let state = document.querySelector("input").value.trim();
    console.log("Searching for state:", state);

    let allColleges = await getcolleges(state);

    // 2. Filter using the exact same variable name 'state'
    let filteredColleges = allColleges.filter(col => {
        if (col["state-province"]) {
            // Both variables must use 'state' now
            return col["state-province"].toLowerCase() === state.toLowerCase();
        }
        return false;
    });
    Show(filteredColleges);
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

// async function getcolleges(country) {
//     try{
//         let res=await axios.get(url2+country );
//         console.log(res.data);
//         return res.data;
//     }
//     catch(e){
//         console.log("error:",e);
//         return [];
//     }   
// }


async function getcolleges(state) {
    try{
        let res=await axios.get(`${url2}&state-province=${state}`);
        console.log(res.data);
        return res.data;
    }
    catch(e){
        console.log("error:",e);
        return [];
    }   
}