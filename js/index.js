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

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navAtag = document.querySelectorAll('a');
const navLinks = document.querySelectorAll('.nav-links > li');

burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

            
    for(var i=0;i<navLinks.length;i++){
        if(navLinks[i].style.animation){
            navLinks[i].style.animation = '';
        }
        navLinks[i].style.animation = 'navLinkFade 0.5s ease forwards'; 
    }

    burger.classList.toggle("burgerMove");
});

for(var i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle("burgerMove");
    });             
}



  



//Nav Bar End