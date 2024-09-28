// problem 01 
// 1.	Write a while loop that prints all the odd numbers between 1 and 50.
let num = 1;

while (num <= 50) {
  if (num % 2 !== 0) {
    console.log("the " + num + " is odd");
  }
  num++;
}


// problem 02
// 2.	Using a for loop, print all the even numbers from 2 to 100.

for(let i = 0; i<=100 ; i++){
    if ( i % 2 == 0 ) {
        let result = "The number " + i + " is even";
        console.log(result);
        
    } else {
        let result = "The number " + i + " is odd";
        console.log(result);
        
    }
}

// problem 03
// 3.Given an array of numbers [3, 8, 12, 5, 9], use a for loop to calculate the sum of the elements in the array. 

let numbArray = [3, 8, 12, 5, 9];
let arraySum = 0;
for (let i=0; i < numbArray.length; i++){
    console.log(numbArray[i]);
    
    arraySum = arraySum + numbArray[i];
    console.log(arraySum);

}

// problem 04
// 4.	Use a while loop to iterate through the array [4, 15, 23, 42, 8, 16] and print each element.

const whileArray = [4, 15, 23, 42, 8, 16];
let i = 0 ;
let arraytext = 0;
while (whileArray[i]) {
    arraytext = whileArray[i];
    console.log(arraytext);
    i++;
}


// problem 05
// 5.	Write a for loop that loops through numbers 1 to 100, but breaks the loop when it encounters the number 45.

for(let i =0; i<= 100; i++){
    if ( i === 45) {
        break;
    }
    console.log(i);
    
}

// problem 06
// 6.	Write a while loop that prints numbers from 1 to 20 but skips numbers divisible by 4 using the continue statement.

// problem 07
// 7.	Use a while loop to print numbers in reverse order from 20 to 1.

// problem 08
// 8.	Write a for loop that subtracts all the numbers in the array [20, 5, 8, 10, 3] starting with the first number (20). { loop diye korar try korben }

// problem 09 
// 9.	Given the array [10, 20, 30, 40, 50], calculate the average of the numbers using a for loop.

// problem 10
// 10.	Write a program that iterates through numbers from 1 to 50. For each number, print "Even" if the number is divisible by 2, and "Odd" if it isn’t.