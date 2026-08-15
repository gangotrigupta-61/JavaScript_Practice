
// forEach
let aa=[0,1,2,3,4,5,6,7];
let print=(el)=>{
    console.log(el);
}
aa.forEach(print);

let arr=[
    {
        name:"Gangotri",
        marks:94
    },
    {
       name:"Shi",
       marks:96
    }
];

arr.forEach((el)=>{
    console.log(el.name);
});

// map

let dd=aa.map((el)=>{
    return el*2;
});

console.log(dd);

let gpa=arr.map((el)=>{
    return el.marks/10;
});

console.log(gpa);


// filter= if condition is correct then element will be added in arr
// if condition is false then element will not be added

let ans=aa.filter((el)=>{
    return el%2==0;
});

console.log(ans);

// every

console.log([2,4,6,8].every((el)=>{
     return el%2 == 0}
));


console.log([1,2,4,6,8].every((el)=>{
     return el%2 == 0}
));


// some

console.log([2,4,6,8].some((el)=>{
     return el%2 == 0}
));

console.log([1,2,4,6,8].some((el)=>{
     return el%2 == 0}
));

console.log([1,3,5].every((el)=>{
     return el%2 == 0}
));


// Reduce


console.log(aa.reduce((sum,el)=>{ return sum+el }));

let lar=0;
let max=aa.reduce((lar,el)=>{ 
    if(el>lar){
        return el;
    }
    else{
        return lar;
    }
});

console.log(max);


let a=[10,20,30,40];
console.log(a.every( (el) => {
    return  el%10 ==0
}));




let min=aa.reduce((min,el)=>{
    if(el<min){
        return el;
    }
    else{
        return min;
    }
});
console.log(min);


function getMin(nums){
    let min=nums.reduce((min,el)=>{
        if(el<min){
            return el;
        }
        else{
            return min;
        }
    });
    return min;
}

let nums=[1,-7,4,6];



// default para meters

function sum(a,b=2){
    return a+b;
}

function sum2(a=8,b){
   return a+b;
}