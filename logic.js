/*
//                                                                           Fabonacci Series

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

=============================================================================================================================================================

                                                                 ARMSTRONG NUMBER

let arm = 153;

function findArmStrong(num) {
  let originalNum = num;
  count = 0;
  while (num !== 0) {
    let rem = num % 10;
    let val = Math.floor(rem);
    count += val * val * val;
    num = num / 10;
  }
  console.log(originalNum, count);
  if (originalNum === count) {
    return true;
  }
  return false;
}

let res = findArmStrong(arm);
console.log(res);


==============================================================================================================================================================
                                     
                                     (Escaping Literal Quotes in Strings)
                                     ------------------------------------
     
    const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
    console.log(sampleStr)
    
    output : Alan said, "Peter is learning JavaScript".
    
    
                                   Quoting Strings with Single Quotes
                                   ----------------------------------
                                The above same thing can be done with single and double quotes
                                
                                
                                Escape Sequences in Strings
                                --------------------------
                                
                                Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
   
   ==========================================================================================================================================================

                                                Understand String Immutability
                                                --------------------------------
                                                
In JavaScript, String values are immutable, which means that they cannot be altered once created.


                                                       
*/
