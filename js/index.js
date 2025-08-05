const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        let x = e.pageX - btn.offsetLeft;
        let y = e.pageY - btn.offsetTop;
    
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
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
