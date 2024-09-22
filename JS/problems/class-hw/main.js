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