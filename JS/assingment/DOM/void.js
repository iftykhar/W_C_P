// 1. create a button that, when clicked shows alert button is clicked.

let body = document.body;
let alertbtn = document.getElementById('alertbtn');
alertbtn.addEventListener('click', ()=>{
    alert("alert button is clicked");
})