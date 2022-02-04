
const loader = document.getElementById('preloader');

const togle = document.getElementById('button-menu');
const nav = document.getElementById('nav-items');
const head = document.querySelector('header');

togle.addEventListener("click", () => {
    nav.classList.toggle('active');
    head.classList.toggle('active');

})

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000)
})