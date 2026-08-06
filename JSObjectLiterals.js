const student={
    name:"Gangotri",
    age:19,
    grade:94.4,
    city:"delhi"
};

const item={
    price:90,
    discount:4,
    colors:[red,green]
};

const twitterpost={
    username:"Shraddha",
    content:"This is my first post",
    likes:50,
    reposts:5,
    tags:["@gangotri","@shubhi"]
};

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
}


// obj.1
// VM1091:1 Uncaught SyntaxError: Unexpected number
// obj["1"]
// 'a'
// obj[1]
// 'a'
// obj[null]
// 'd'
// obj["null"]
// 'd'
// obj.null
// 'd'



// object of objects
const classinfo={
    s1:{
        name:"Gangotri",
        age:19
    },
    s2:{
       name:"Annu",
       age:20
    }
};

// array of objects

const classinfo=[
    {
        name:"gangotri",
        age:19
     },
    {
     name:"annu",
        age:19
     }
]