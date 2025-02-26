const burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click', function () {
    const nav = document.querySelector('.nav-header');
    nav.classList.toggle('burger-opened');
});


