let myScore=0;
let computerScore=0;
for (let i=0;i<5;i++){
 for (let j=1;j<=5;) {console.log(`Round ${j}`);
 
let choice=["scissor","rock","paper"]
let rand=Math.floor((Math.random()*choice.length))
let user=prompt("Enter: rock, scissor or paper").toLowerCase().trim()


if(user==="scissor"){
    if(choice[rand]==="rock"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`);
        computerScore++
        
    } else if (choice[rand]==="paper"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`); 
        myScore++

    } else if (choice[rand]==="scissor"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`);  
    } 
}

else if(user==="paper"){
    if(choice[rand]==="rock"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`);
        myScore++

    } else if (choice[rand]==="paper"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`);
        
    } else if (choice[rand]==="scissor"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`);
        computerScore++
    } 

} else if(user==="rock"){
    if(choice[rand]==="rock"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`);
        
    } else if (choice[rand]==="paper"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`);
        computerScore++

    } else if (choice[rand]==="scissor"){
        console.log(`your choice: ${user}`);
        console.log(`computer choice: ${choice[rand]}`);
         myScore++
    } 
}
j++}

 if(i=4){
    if(myScore>computerScore){
    console.log(`You win and your score: ${myScore} and computer score: ${computerScore}`);}
    else if (myScore<computerScore){console.log(`You lose and your score: ${myScore} and computer score: ${computerScore}`);}
    else {console.log("Draw");}
 }
}

