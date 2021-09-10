const hamburguer = document.getElementById('btnHamburguer');
const body = document.querySelector('body');
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay');
const hasFade = document.querySelectorAll('.has-fade')


hamburguer.addEventListener('click', () => {
    if(header.classList.contains('open')) {
        body.classList.remove('noscroll')
        header.classList.remove('open')
        hasFade.forEach( element => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    } else {
        body.classList.add('noscroll')
        header.classList.add('open');
        hasFade.forEach( element => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})