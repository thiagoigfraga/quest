let firstValue = process.argv[2];
let secondValue = process.argv[3];

firstValue = firstValue.toLowerCase();
secondValue = secondValue.toLowerCase();

if(firstValue > secondValue){
    console.log('1');
}
else if(firstValue === secondValue){
    console.log('0');
}
else if(firstValue < secondValue) {
    console.log('-1');
}