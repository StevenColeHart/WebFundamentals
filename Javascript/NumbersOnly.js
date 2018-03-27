function numbonly(arr){
    var usearr = [];
    for(var i=0; i < arr.length; i++){
        if (typeof arr[i] === "number"){
            usearr.push(arr[i]);
        }
    }
    return usearr;
}
console.log(numbonly([3,'seven',8,.4,true]));