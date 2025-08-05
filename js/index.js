const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btnz) => {
    btnz.addEventListener('mousemove', (e) => {
        let x = e.pageX - btnz.offsetLeft;
        let y = e.pageY - btnz.offsetTop;
    
        btnz.style.setProperty('--x', x + 'px');
        btnz.style.setProperty('--y', y + 'px');
    });
})

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});
