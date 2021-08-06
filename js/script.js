document.getElementById('toggle--menu').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('is-active');
    document.getElementById('toggle--menu').classList.toggle('is-active');
})


ScrollReveal({ duration: 1000 })

const optionsOpacity = {
    distance: '20px',
    opacity: 0.1,
    interval: 50
};

const optionsScale= {
    scale: .5,
    interval: 50
};

ScrollReveal().reveal('.hero--section')
ScrollReveal().reveal('.card', optionsOpacity);
ScrollReveal().reveal('.design--card', optionsScale);
ScrollReveal().reveal('.team__image', optionsScale);
ScrollReveal().reveal('.clients--testmonial');