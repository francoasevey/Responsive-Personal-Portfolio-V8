const navList = document.querySelector('.navlist');
const menuBtn = document.querySelector('.ri-menu-line');

menuBtn.onclick = function(){
    navList.classList.toggle('active');
    menuBtn.classList.toggle('ri-arrow-up-double-line');
}

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('scrolling',scrollY > 50)
})

var portfolioTabs = document.getElementsByClassName('portfolio-tab');
var tabContents = document.getElementsByClassName('tab-content');

function tabOpen(x){
    for(portfolioTab of portfolioTabs){
        portfolioTab.classList.remove('active');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-content');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(x).classList.add('active-content');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = function(){
    themeBtn.classList.toggle('ri-sun-line');
    if(themeBtn.classList.contains('ri-sun-line')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active')
    }
}

const sr = ScrollReveal({
    distance : '80px',
    duration: 2500,
    delay: 200,
    reset: true,
});

sr.reveal('.home-container .left', {origin: 'top'});
sr.reveal('.home-container .right', {origin: 'left'});
sr.reveal('.home-container .right', {origin: 'top'});
sr.reveal('.about-container .left', {origin: 'left'});
sr.reveal('.services-container', {origin: 'bottom'});
sr.reveal('.portfolio-container', {origin: 'left'});
sr.reveal('.portfolio-buttons', {origin: 'top'});
sr.reveal('.testimonial-container', {origin: 'bottom'});
sr.reveal('.contact-content', {origin: 'top'});
sr.reveal('.copyright', {origin: 'bottom'});
