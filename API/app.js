let jsonRes=`{"fact":"Approximately 1/3 of cat owners think their pets can read their minds", "length":78}`;

console.log(jsonRes);

let validRes=JSON.parse(jsonRes);
console.log(validRes);

let resofstringify= JSON.stringify(validRes);
console.log(resofstringify);

// let student={
//     name="shraddha",
//     marks=95,
// };

