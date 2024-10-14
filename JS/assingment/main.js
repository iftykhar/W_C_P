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

// a = a.toLocaleLowerCase();
// console.log(a);

// 2. Write a function that takes a sentence and a word as input and checks if the word is present in the sentence using `includes()` and `indexOf()`. Return the index of the first occurrence or -1 if not found.

function checkWordInSentence(sentence, word) {
    
    if (sentence.includes(word)) {
        return sentence.indexOf(word);
    } else {
        return -1;
    }
}

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";

const result = checkWordInSentence(sentence, word);
console.log(result); 


// 3. Create a function that checks whether a string starts with a specific substring using `startsWith()` and ends with another substring using `endsWith()`.
const fullSentence = "Good morning boys and good bye"

function checkStringWith(fullSentence){
    if(fullSentence.startsWith("Good") == true && fullSentence.endsWith("bye") == true){
       return console.log("the sentence was started with Good and ended with Bye");
        
    }else{
        return console.log("the sentence has different meaning");
        
    }
}
checkStringWith(fullSentence);
// 4. Write a function that takes a sentence and splits it into an array of words using `split()`. Then, return the array of words.

function srtingToArray(targetString){
    const splitresult = targetString.split(" ");
    return console.log(splitresult);
    
}

const target = "what is going on ";
srtingToArray(target);

// 5. Create a function that extracts a portion of a string using both `slice()` and `substring()` methods. The start and end indices should be passed as arguments to the function.

function extracter(str ,start , end ){
    let slicedPart = str.slice(start, end);
    let substringPart = str.substring(start, end);
    
    // return {
    //     slicedPart: slicedPart,
    //     substringPart: substringPart
    // };
    return [slicedPart, substringPart];
}

const res = extracter("The quick brown fox", 4, 9);
console.log("Slice result:", res[0]);        
console.log("Substring result:", res[1]);


// 6. Write a function that takes two strings and concatenates them using `concat()`. Also, demonstrate how to join an array of strings into a single string using `join()`.

function twoStrings(one, two,array){
    
    let singlestr = one.concat(" ",two);
    // console.log(singlestr);
    let joinedString = array.join(" ");
    console.log(singlestr, joinedString);
    
}

twoStrings("hello","guys",[]);

// 7. Write a function that takes a number and returns its absolute value using `Math.abs()`. Also, calculate the power of the number to another number using `Math.pow()`.

function absPow(number,  power=1){

    let resulting = Math.abs(number);
    let powerRes = Math.pow(resulting, power);

    return console.log("this is the result "+ powerRes);
    
}
absPow(-9);
// 8. Create a function that takes a decimal number and rounds it to the nearest integer using `Math.round()`. Also, return the number rounded up using `Math.ceil()` and rounded down using `Math.floor()`.

function decimalToInteger( num){

    let round = Math.round(num);
    let ceil = Math.ceil(round);
    let floor = Math.floor(ceil);
    
    return console.log("The number is "+ floor);
    
}

decimalToInteger(2.48);
// 9. Write a function that generates a random number between two given numbers using `Math.random()` and ensures that the result is a whole number.

function RandomNumGen(min , max  ){

    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

RandomNumGen(100,80);