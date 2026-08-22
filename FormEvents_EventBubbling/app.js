let form=document.querySelector("form");

// form.addEventListener("submit",function(){
//     console.log("Form Submitted");
//     alert("Form Submitted");
// });

// using event

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("Form Submitted");
//     alert("Form Submitted");
// });


// EXTRACTING FORM DATA

form.addEventListener("submit",function(event){
    event.preventDefault();

     console.dir(form);

    // by using tag

//     let inp=document.querySelector("input");
//   console.dir(inp);
//   console.log(inp.value);

     //   by using id

// let input=document.querySelector("#user");
// let password=document.querySelector("#pass");
// console.dir(input);
// console.log(input);
// console.log(input.value);
// console.log(password.value);
//    console.log(`Hi, ${input.value}. Your password is set to ${password.value}.`);


// Using this 

// let user=this.elements[0];
// let pass=this.elements[1];
//  console.log(`Hi, ${user.value}. Your password is set to ${pass.value}.`);

});


// CHANGE event and INPUT event

let user=document.querySelector("#user");

user.addEventListener("change",function(){
    console.log(user.value);
    console.log("inputchanged");
    console.log("final value =" ,this.value);
});

user.addEventListener("input",function(){
    console.log("user input event");
    // console.log("final value =" ,this.value);
});


let p=document.querySelector("p");
user.addEventListener("input",function(){
     p.innerText=user.value;
});



// EVENT BUBBLING

let d=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

d.addEventListener("click",function(){
    console.log("Div was clicked");
});


ul.addEventListener("click",function(event){
    // event.stopPropagation();
    console.log("ul was clicked");
});


for(list of li){
    list.addEventListener("click",function(event){
        event.stopPropagation();
    console.log("list was clicked");
})
};




