let url="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     // console.log(response);
    
//     // console.log(response.json());
//     console.log( response.json()
//     .then((data)=>{
//       console.log(data);
//    }) );
// })
// .catch((error)=>{
//     console.log("Error-", error);
// });

// fetch(url)
// .then((res)=>{
//   console.log(res);
//   return res.json();
// })
// .then((data)=>{
//   console.log("data1= " ,data.fact);
//   return fetch(url)
// })
// .then((res)=>{
//   return res.json();
// })
// .then((data)=>{
//   console.log("data2= ", data.fact);
// })
// .catch((err)=>{
//   console.log("ERROR -", err);
// });


// Request along with await try and catch

async function getfacts() {
  try{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);

    let res2=await fetch (url);
    let data2=await res2.json();
    console.log(data2.fact);
  }

  catch(err){
    console.log("error is ",err)
  }
  console.log("Bye!!");
  
}

getfacts();




