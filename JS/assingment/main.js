// 1. Write a function that compares two strings and checks if they are equal, regardless of case sensitivity. Use `toLowerCase()` or `toUpperCase()`.
let a = "abc";
let b = "Abc";

function stringComparison( a , b){
        if(a == a.toLowerCase() && b == b.toLowerCase()){
            a = a.toUpperCase();
            b = b.toUpperCase();
                if( a === b){
                let result =  console.log("string "+a+" string "+ b+" they are the same" );
                return result;
                }
        }else if (a == a.toUpperCase() && b == b.toUpperCase()){
        a = a.toLowerCase();
        b = b.toLowerCase();
        if( a === b){
            let result2 =  console.log("string "+a+" string "+ b+" they are the same" );
            return result2;
        } 
    }
    else{
        return console.log("nothing is same between them");
        
    }
    return console.log("test");
    
 
}

stringComparison(a,b);

a = a.toLocaleLowerCase();
console.log(a);

// 2. Write a function that takes a sentence and a word as input and checks if the word is present in the sentence using `includes()` and `indexOf()`. Return the index of the first occurrence or -1 if not found.
// 3. Create a function that checks whether a string starts with a specific substring using `startsWith()` and ends with another substring using `endsWith()`.
// 4. Write a function that takes a sentence and splits it into an array of words using `split()`. Then, return the array of words.
// 5. Create a function that extracts a portion of a string using both `slice()` and `substring()` methods. The start and end indices should be passed as arguments to the function.
// 6. Write a function that takes two strings and concatenates them using `concat()`. Also, demonstrate how to join an array of strings into a single string using `join()`.
// 7. Write a function that takes a number and returns its absolute value using `Math.abs()`. Also, calculate the power of the number to another number using `Math.pow()`.
// 8. Create a function that takes a decimal number and rounds it to the nearest integer using `Math.round()`. Also, return the number rounded up using `Math.ceil()` and rounded down using `Math.floor()`.
// 9. Write a function that generates a random number between two given numbers using `Math.random()` and ensures that the result is a whole number.
// 