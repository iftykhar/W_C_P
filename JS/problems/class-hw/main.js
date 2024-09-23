// problem 01 array ['apple','banana','cherry']
// convert array into string using toString()
let pr1 = ['apple','banana','cherry'];
let str = pr1.toString();
console.log(str);

// problem 02 array [10,20,30,40,50]
// access 3rd element of this array
let pr2 = [10,20,30,40,50];
let arpos = pr2.at(2);
console.log(arpos);

// problem 03 array ['red','green','blue']
// join all elements of the array into a single string separated by a hyphen "-" using join()
let pr3 = ['red','green','blue'];
let pr3join = pr3.join('-');
console.log(pr3join);

// problem 04 array [1,2,3,4,5]
// remove last element of the array
let pr4 = [1,2,3,4,5];
pr4.pop();
console.log(pr4);

// problem 05 array ['apple','banana']
//  add a new element "grape" to the end of the array

let pr5 =['apple','banana'];
pr5.push('grape');
console.log(pr5);

// problem 06 array ['car','bike','bus']
// remove first element from array

let pr6 = ['car','bike','bus'];
pr6.shift();
console.log(pr6);


// problem 07 array ['boat','ship']
// add 'train' and 'plane' in the begining of the array

let pr7 = ['boat','ship'];
pr7.unshift('train','plane');
console.log(pr7);

// problem 08 array  ['dog','cat','bird']
// use 'delete' to remove the 2nd element from the array

let pr8 = ['dog','cat','bird'];
delete pr8[1];
console.log(pr8);

// problem 09 array [1,2,3] and [4,5,6]
// merge these array

const pr9A1 = [1,2,3];
const pr9A2 = [4,5,6];

let pr9 = pr9A1.concat(pr9A2);
console.log(pr9);

// problem 10 array ['a','b','c','d','e','f']
// delete 'c' and 'd' using splice()

let pr10 = ['a','b','c','d','e','f'];
pr10.splice(2,2);
console.log(pr10);

// problem 11 array ['first','second',''third,'fourth','fifth','sixth','seventh','eighth','nineth']
// print the element at index 4

let pr11 = ['first','second','third','fourth','fifth','sixth','seventh','eighth','nineth'];
const pr11result = pr11.at(4);
console.log(pr11result);

// problem 12 longString = "apple banana cherry date elderberry fig grape honeydew kiwiw lemon mango nectraine orange papaya quince raspberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fennel grapefruit honeycrisp jackfruit kumquat line melon nectar olive peach pear plum pomegranate rhubrab starfruit tomato vanila"
// find the index number of "fennel" from the variable longString

let longString = "apple banana cherry date elderberry fig grape honeydew kiwi lemon mango nectraine orange papaya quince raspberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fennel grapefruit honeycrisp jackfruit kumquat line melon nectar olive peach pear plum pomegranate rhubrab starfruit tomato vanila";
let longStringtoArray = longString.split(" ");
let pr12Result = longString.indexOf("fennel"); 
console.log(pr12Result  );


// problem 13 array ['apple','banana','cherry','date','fig']
// remove the last two elements and print the updated array
// use pop() method.[you can use the method multiple time you need]

let pr13 = ['apple','banana','cherry','date','fig'];
pr13.pop();
pr13.pop();
console.log(pr13);

// problem 14 array ['dog','cat','fish','bird']
// Covert this array into a comma-separated string

let pr14array = ['dog','cat','fish','bird'];
const convertedArray = pr14array.toString(",");
console.log(convertedArray);

// problem 15 array['apple','orange','banana','grape']
// create string with each element separated by a hyphen("-")

let pr15Array = ['apple','orange','banana','grape'];
const ppr15ArraytoString = pr15Array.join("-");
console.log(ppr15ArraytoString);

// problem 16 array['b','c','d']
// add elements 'a','b' and 'c' to the begining of the array in a single call. print the updated array

let pr16array = ['b','c','d'];
pr16array.unshift('a','b','c');
console.log(pr16array);

// problem 17 array[1,2,3,4,5]
// use delete operator to remove the element 4

let pr17Array = [1,2,3,4,5];
delete pr17Array[4];
console.log(pr17Array);

// problem 18 array [1,2,3] and [4,5,6]
// merge these arrays and then use slice() to get the first 4 elements of the resulting array.

const pr18Array1 =[1,2,3];
const pr18Array2 = [4,5,6];
let pr18Array = pr18Array1.concat(pr18Array2);
let pr18result = pr18Array.slice(0,-2);
console.log(pr18result);

// problem 19 array['a','b','c','d','e']
// remove 2 elements starting from index 1 and insert 'x' and 'y' in their place.
// print updated array

let pr19Array = ['a','b','c','d','e'];
pr19Array.splice(1,2,'x','y');
console.log(pr19Array);


// problem 20 array [10,20,30,40,50]
// use slice() method to extract a subarray starting from index 1 and contain 3 elements
let pr20Array =  [10,20,30,40,50];
const pr20resutl = pr20Array.slice(1,-1);
console.log(pr20resutl);

// problem 21 array [1,2,3,4,5]
// covert this array into string. Then use split() to convert it back incto array of strings.
// print both the string and resulting array
let pr21Array = [1,2,3,4,5];
let pr21artostring = pr21Array.toString();
console.log(pr21artostring);
let pr21StringtoArray = pr21artostring.split(",");
let pr21ArrayNumbers = pr21StringtoArray.map(Number);
console.log(pr21ArrayNumbers);  
// problem 22 array['a','b','c','d','e','f']
// use the at() method to access and print the first and the last elements of the array.

let pr22Array = ['a','b','c','d','e','f'];
const pr22result = pr22Array.at(-1);
console.log(pr22result);