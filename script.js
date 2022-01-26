
let menu1 = document.querySelector("#navbar");

let burger = document.querySelector('.burger');

let information = document.querySelector('.information');

burger.addEventListener('click', () => {
    menu1.style.display = 'inherit';
    menu1.style.width = '80vw';
    menu1.style.background = 'white';
    menu1.style.position = 'absolute';
    information.style.display = 'none';
})

menu1.addEventListener('click', () => {
    if(information.style.display === 'none')
    {
        menu1.style.display = 'none';
        information.style.display = 'initial';
    }
})