var daysUntilMyBirthday = 60;
for(var i = daysUntilMyBirthday; i >= 0; i--){
    if(daysUntilMyBirthday > 30){
        console.log(daysUntilMyBirthday+"days until my birthday. So far away.. :(\n");
        daysUntilMyBirthday = daysUntilMyBirthday -1
    }
    else if(daysUntilMyBirthday <= 30 && daysUntilMyBirthday >5){
        console.log(daysUntilMyBirthday+"days until my birthday. So Close!\n");
        daysUntilMyBirthday = daysUntilMyBirthday -1
    }
    else if(daysUntilMyBirthday > 0){
        console.log(daysUntilMyBirthday+"DAYS UNTIL MY BIRTHDAY!!!");
        daysUntilMyBirthday = daysUntilMyBirthday -1

    }
    else if(daysUntilMyBirthday ===0){
        console.log("HAPPY BIRTHDAY")
    }


}

