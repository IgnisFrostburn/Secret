const num = document.querySelector('#num');
const btn = document.querySelector('#btn');
const clr = document.querySelector('#clr');
const apology = "I'm sorry";
let text = "";

btn.addEventListener('click', function(e) {
    e.preventDefault();
    let numVal = num.value;
    for(let i = 1; i <= numVal; i++) {
        text += i + ". " + apology + "<br>";
    }
    document.querySelector('#text').innerHTML = text;
    num.value = "";
})

clr.addEventListener('click', function(e) {

    document.querySelector('#text').innerHTML = "";
    num.value = "";
})