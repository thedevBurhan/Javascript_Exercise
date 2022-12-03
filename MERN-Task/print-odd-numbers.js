function printOddNumber(num){
    for (i=1;i<=num;i++){
        if (i %2  !== 0){
        console.log(i);
        }
}
}
printOddNumber(10);

// in arrow function

var printOddNumber= (num) => {
    for (i=1;i<=num;i++){
        if (i %2  !== 0){
        console.log(i);
        }
}
} 
printOddNumber(10);