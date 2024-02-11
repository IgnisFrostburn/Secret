const space = document.querySelector('.space');
const question = document.querySelector('.question');
const yes_button = document.querySelector('.yes_button');
const no_button = document.querySelector('.no_button');

const spaceRect = space.getBoundingClientRect();
const yesRect = yes_button.getBoundingClientRect();
const noRect = no_button.getBoundingClientRect();

var counter = 0;

yes_button.addEventListener('click', () => {
    if(counter == 0) {
        question.innerHTML = "REALLY?"
    } else if(counter == 1) {
        question.innerHTML = "SURE DIHA BA"
    } else if(counter == 2) {
        question.innerHTML = "FINAL NA JUD NA?"
    } else {
        question.innerHTML = "Then will you be my <span style = 'font-size: 100px; font-family: valentine;'>valentine</span>?"
        yes_button.innerHTML = "<a style='text-decoration: none; color: white; font-size: 50px' href='./next.html'>Yes</a>"
    }
    counter++;
    
})

no_button.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (spaceRect.width - noRect.width)) + 1;
    const j = Math.floor(Math.random() * (spaceRect.height - noRect.height)) + 1;

    no_button.style.left = i + 'px';
    no_button.style.top = j + 'px';
})
