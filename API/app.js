let jsonRes=`{"fact":"Approximately 1/3 of cat owners think their pets can read their minds", "length":78}`;

console.log(jsonRes);

let validRes=JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);

// let resofstringify= JSON.stringify(validRes);
// console.log(resofstringify);

let student={
    name:"gangotri",
     marks:94
};

console.log(JSON.stringify(student));





