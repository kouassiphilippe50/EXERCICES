
for(let a=1; a<=30;a++){
    if(a % 3 === 0 && a % 5 ===0){
        console.log("FizzBuzz");
    } else if( a % 3 ===0){
        console.log("fizz");
    } else if( a % 5 ===0){
        console.log("buzz");
    } else{
        console.log(a);
    }
}

