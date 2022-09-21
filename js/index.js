const body = document.querySelector('body');
let lastScroll = 0;
// Nav Bar Scroll Start


window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    if(currentScroll<= 0){
        body.classList.remove("scrollUp");
    }
    if(currentScroll > lastScroll && !body.classList.contains("scrollDown")){
        body.classList.remove("scrollUp");
        body.classList.add("scrollDown");

    }
    if(currentScroll < lastScroll && body.classList.contains("scrollDown")){
        body.classList.remove("scrollDown");
        body.classList.add("scrollUp");

    }

    lastScroll = currentScroll;
})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navAtag = document.querySelectorAll('a');
    
    burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

             
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            link.style.animation = 'navLinkFade 0.5s ease forwards';
        });

        burger.classList.toggle("burgerMove");
    });
    
    navLinks.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle("burgerMove");

    });       
}

navSlide();


//Nav Bar End