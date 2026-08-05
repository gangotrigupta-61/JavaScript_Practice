// console.log("MOVIE");
window.onload=function (){


const movie="DDLJ";
let guess=prompt("Guess movie name:");


while(true){
 if(guess==movie){
   console.log(`Hurray Correct guess it was ${movie}`);
   break;
}
else if(guess=="quite" || guess==null){
   console.log(`You quit, it was ${movie}`);
   break;
}
else{
   guess= prompt("Try Again:");
}
}

}