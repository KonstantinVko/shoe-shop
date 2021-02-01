let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"

let splittedArr = numbers.split(' ');


let numberArray = splittedArr.map((el)=>parseInt(el));
console.log(numberArray)

let sortedArray = numberArray.sort(function(a, b){return a-b});
console.log("sorted" + " " + sortedArray)

let min = sortedArray[0].toString();
let max = sortedArray.slice(-1).pop().toString();

let minMax = (max + " " + min);

console.log(min);
console.log(max);
console.log(minMax);