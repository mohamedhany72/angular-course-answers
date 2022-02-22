(function (){
    "use strict";

    let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    console.log("unfiltered array: " + numArray);

    let fArray = numArray.filter(function(val){
        return val > 10;
    })
    console.log("filtered array: " + fArray);

    function lessThan(val){
        return val < 11;
    }
     let f2Array = numArray.filter(lessThan);
     console.log("another filtered array: " + f2Array);

})()