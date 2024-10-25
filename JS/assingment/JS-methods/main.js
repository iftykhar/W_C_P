//  1. Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments, and show the outputs.

function multiply( a=1, b=4 ){

    let mult =  a * b;
    return console.log(mult);

}

multiply();
multiply(4)
//  2. Create a function that takes a name and a city as input and returns a multi-line message using template literals, incorporating both variables.

function notice(name = 'obaed' , city = 'Dhaka'){

    const notice = `hello my name is ${name} and i am from ${city}`;
    console.log(notice);
    
    
}

notice();
notice("Fakhrul");

//  3. Refactor a given function that multiplies two numbers into an arrow function, reducing its body to the minimum.

let multply = (x,y)=>{ return console.log( x*y );}

multply(5,6);

//  4. Combine two arrays using the spread operator and find the maximum value in the merged array.

let ar1 = [1,2,3,4,5,6,10,12,14];
let ar2 = [21,22,33,44];

let newarr = [...ar1,...ar2];
let mas = Math.max(...newarr);
console.log(mas);



//  5.  Create an object with properties name, age, and country, and use destructuring to extract them into variables. Also, destructure an array of five numbers to get the first two elements.




//  6.  Access the city property of a nested object using both dot notation and optional chaining.
//  7.  Given an array of student objects with properties name and marks, use:map() to extract the names.
//  8.  filter() to return students with marks above 80.
//  9.  find() to get the first student with marks over 90.
//  10.  Use forEach() on an array of objects (e.g., products with name and price) to log a message with each product's details.
//  11.  Use map() on a string array to create a new array where each string is prefixed with "Hello, ".
//  12. Given an array of objects, use filter() to return all objects where a specific condition is met (e.g., products priced above a certain amount).