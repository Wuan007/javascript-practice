// Question 1
// Write the function printInt(n)
// taking the parameter n and print a;; naturual numbers
// from 1 to n in console.
function printInt(n){
    for (var i=1;i<n;i++){
        console.log(i);
    }
}
// printInt(10)
// print(13)

// Question 2
// Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1

// Answer
function printIntRev(n) {
for(var i=n;i>=1;i--){
    console.log(i);
}
}
printIntRev(22);







// Question 3
// Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -

function checkInput(x) {
    if (typeof x ==="number") {
        return "number"
    } else if (typeof x ===  "string") {
        return "string"
    } else if (typeof x ==="boolean") {

        return "boolean"
    } else {
        return -1;
    }
}



// Question 4

// Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num.  
function simpleEvenAdding(num) {

    // store the answer
    var solution = 0;

    // // Loop from 1 to num
    // for(var i=1; i<num;i++){
    //   // check if i is even number
    //    //if(i % 2 ===0) {
       //     soluction +=1;
    //  }
    // }
    for(var i=0;i<=num;1+=2) {
   
        solution +=i;

}
return solution;
}
// console.log(simpleEvenAdding(12));



// Question 5

// Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.

function letterCapital(str) {
    // seperate each word inside str
    var words = str.split("");

    // Store the number
    var solution = "";

    // find the first character in each word
    for(var i=0;i<words.length;i++){
var upperWord = words[i].replace(words)[i][0], words[i][0].toUpperCase()); soluction += ""+ upperWord;
}
var slice







// Question 6 
// Write the function simpleReverse(str) taking a string and return the string in reversed order. 

function simpleReverse(str){
    // transfer str into array
    var strArray = str.split("");
    // rweer the array
    var RevArray= strArray.reverse();
// transfer array back to string
return reArray.join("");
}
// Console.LOG(simpleReverse("Good Morning"));




// Queston 7
    ///Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
    function findDiff(arr) {
// find maximun number
var max = Math.max(... arr);

var min = Math.min(... arr);

// find max - min
return max - min;
    }
Console





//Question 8
// Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
function timeConvert(num) {
    // getting the hour
    var hour = parseInt(num/60);
    // getting the minutes
    var minutes = num % 60
    // combine the answer
    return hour  + ":" + minutes
}
console.log(timeConvert(123));
console.log(timeconvert(59));




// Question 9
    // Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
function findStr(str, long) {
    var spliteArray = long.split(str);
    return splitedArray.length -1;
}


 // Question 10
    // Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between //// them, including the bounds. 

    function selfDividingNumbers(left, right){
    }
   function isSelfDividing(num) {
    var digits = num.toString().split("");

 for(var i=0; i< digits.length; i++){
     if(digits % digits [i] !==0) {
        return false; 
     }
 }
   return true;

   }

   


// Question 11
        //  Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  
        function moveZeros(num) {
       // count Number of 0s
       var counter = 0;

       // store the solution array
       var solution = [];

       for(i=0;i<num.lengtrh;i++){
           if(nums[i] ===0){
               counter++;
           } else {
               soluction.push(nums[i]);
           }
           }
       
    // adding 0s
    for(var j=counter;j>0;j--){
solution.push(0);
    }
return solution;

        }

        console.log(movesZeros(1,0,21,4,0,0,4))














// Question 12

       // Create an average() function that calculates the average of an array of numbers.

function average(nums) {
if (nums.length ===0) {
    return 0;

    
}
})
















        









