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


let togglebtn = document.getElementById('togglebtn');

let tglewrd = document.getElementById('tglewrd');
let tglewrdvalue = tglewrd.innerText;

togglebtn.addEventListener('click', ()=>{
    if(tglewrd.innerText != ""){
        tglewrd.innerText = "";
    }else if(tglewrd.innerText == "" ){
        tglewrd.innerText = tglewrdvalue;
    }

})



let modechange = document.getElementById('modechange');
let Mode = false; 

modechange.addEventListener('click', () => {
    if (Mode) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

    }
    
    Mode = !Mode; 
});


let fnumber = document.getElementById('fnumber');
let lnumber = document.getElementById('lnumber');
let sum = document.getElementById('sum');
let sumshow = document.getElementById('sumshow');

sum.addEventListener('click', ()=>{
    let total = Number(fnumber.value) + Number(lnumber.value);

   sumshow.innerText = `The summation of first and second number is ${total}`;
    
})