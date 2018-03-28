function slots(quarter){
    var winNum = (Math.trunc(Math.random()*100));
    while(quarter >0){
        quarter --;
        if(winNum == (Math.trunc(Math.random()*100))){
        return quarter +=  (Math.trunc(Math.random()*50+50));
        }
    }
    return quarter;
}
console.log(slots(200));

