//Question1

function userLogin(loginAttempts){
    loginAttempts = 1;
   while(loginAttempts<=4){
    if(loginAttempts==4){
        console.log("Account locked");
        break;
    }
    console.log("Try logging in again")
    loginAttempts++;
   } 
   
}
userLogin();

//Question 2

function processVotes(votes){
   let i=0;
    do{
        console.log(votes[i]);
        i++;
    }while(i < votes.length);

}
processVotes(["yes","no","no","no","yes"]);

//Question 3

function weekDays(days){
    for (let i = 0;i<days.length;i++){
        switch(days[i]){
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break; 
            default:
                console.log("Invalid input");
                break;                                
        }
    }
}
weekDays([2,1,4,5,3,7,6])

//Question 4

function checkPassword(passwords){
    passwords.forEach((password)=>{
        if(password.length >= 8){
        console.log("Strong");
    }
    else{
        console.log("Weak")
    }})
   
}
checkPassword(["password123","123pass","H3 ll0 !"]);

//Question 5

function greetings(languages){
    languages.forEach((language)=>{
        switch(language){
            case "en":
                console.log("Hello");
                break;
            case "fr":
                console.log("Bonjour");
                break;
            case "sw":
                console.log("Habari");
                break;
            default:
                console.log("Language unknown");
                break;           
        }
    })
   
}
greetings(["en","fr","sw","kiny"]);

// Question 6

function weatherCondition(temperature){
    for (i=0;i<temperature.length;i++){
        if(temperature[i]>30){
            console.log("High heat alert!");
        }
        else if(temperature[i]<15){
            console.log("Cold alert!");
        }
        else{
            console.log ("Normal condition");
        }
    }
}
weatherCondition([12,40,70,13,20,18,4])

//Qustion 7

function printUserNames(names){
    let i=0;
    while(i<names.length){
        console.log(names[i]);
        i++;
    }
}
printUserNames(["Akeza","Shirley","Dani","Mahi","Rigbe"]);

//Question 8

function increaseScore(scores){
    scores.forEach((score)=>{
        do{
            score+=10;
            console.log(`your new score is:${score}`);
        }while(score<=50)
    })
}
increaseScore([40,10,20,30]);