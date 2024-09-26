// problem 01 
// 1.	Write a while loop that prints all the odd numbers between 1 and 50.


// problem 02
// 2.	Using a for loop, print all the even numbers from 2 to 100.

for(let i = 0; i<=100 ; i++){
    if ( i % 2 == 0 ) {
        let result = "The number " + i + " is even";
        // console.log(result);
        
    } else {
        let result = "The number " + i + " is odd";
        // console.log(result);
        
    }
}

// problem 03
// 3.Given an array of numbers [3, 8, 12, 5, 9], use a for loop to calculate the sum of the elements in the array. 

let numbArray = [3, 8, 12, 5, 9];
let arraySum = 0;
for (let i=0; i < numbArray.length; i++){
    // console.log(numbArray[i]);
    
    arraySum = arraySum + numbArray[i];
    console.log(arraySum);
    
    
}