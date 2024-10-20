// 1. create a button that, when clicked shows alert button is clicked.

let body = document.body;
let alertbtn = document.getElementById('alertbtn');
alertbtn.addEventListener('click', ()=>{
    alert("alert button is clicked");
})

let addOne = document.getElementById('addone');
let increaseBtn = document.getElementById('increase');

increaseBtn.addEventListener('click', ()=>{
    let count = parseInt(addOne.innerText, 10);;
    count += 1;
    addOne.innerText = '';
    addOne.innerText = count;
})