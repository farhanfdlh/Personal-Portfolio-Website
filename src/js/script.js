// hamburger button
const hamburger = document.querySelector("#hamburger");
const navbar = document. querySelector('#navbar')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navbar.classList.toggle('hidden')
})

// fixed-navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
    header.classList.add('fixed-navbar' );
    } else {
    header.classList.remove('fixed-navbar');
    }
};