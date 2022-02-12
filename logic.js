/*
// Fabonacci Series

let num = 10;

let fabinachii = (num) => {
  let a = -1;
  let b = 1;
  let c;
  let sum = 0
  for (let i = 1; i < 10; i++) {
       console.log("the fabinachhi number",c);     
     c = a +b 
     a = b
     b = c  
     sum+= c
  }
  return sum
}

let res = fabinachii(num)
console.log("the total number",res);

=============================================================================================================================================================

Check If it is triangle by three sides

let side1 = 2;
let side2 = 3;
let side3 = 4;

function checkItIsTraingle(side1, side2, side3) {
    if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
        return true;
    }
    return false;
}

let res = checkItIsTraingle(side1, side2, side3);

console.log(res);

==============================================================================================================================================================
// find max and min from array

let arr = [13, 5];

function findMinAndMax(arr) {
  let smallestNum = arr[0];
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return { smallestNum, largestNum };
}

let res = findMinAndMax(arr);
console.log(res);

========================================================================================================================================================================
                                                                         REVERSE A NUMBER
let num = 789;

function Reverse(num) {
  let revNum = 0;
  while (num != 0) {
    let rem = parseInt(num % 10);
    revNum = revNum * 10 + rem;
    num = parseInt(num / 10);
  }
  return revNum;
}

let res = Reverse(num);
console.log(res);
*/
