  
  let TODO=[];
    window.TODO=TODO;
    let item;
    let user= prompt("Enter Your Choice");

 while(true){
    
       if(user=="QUIT"){
        console.log("Quiting TODO App");
        break;
       }

      if(user=="LIST"){
       for(let i=0; i<TODO.length; i++){
            console.log(i,TODO[i]);
       }
    }
   
       else if(user=="ADD"){
        item=prompt("Enter TODO:");
        TODO.push(item);
        console.log(item);
       }

       else if(user=="DELETE"){
        item=prompt("Enter TODO index u want to delete:");
        TODO.splice(item,1);
        console.log("deleted");
       }

       else{
        console.log("wrong request");
       }


    
       
    user= prompt("Enter Your Choice");
 
}
   

