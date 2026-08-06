
let max=prompt("Enter Maximum number:");

let num=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the Number");

while(true){
    if(guess=="QUIT"){
        console.log("You Quit");
        break;
    }
   
    else if(guess>num){
       guess=prompt("Too Larger, GuessAgain");
    }

     else if(guess<num){
        guess=prompt("Too Smaller, GuessAgain");
    }

    else if(guess==num){
        console.log("HURRAY, Correct Guess!!");
        break;
    }

    else {
        console.log("Wrong Number");
    }
};