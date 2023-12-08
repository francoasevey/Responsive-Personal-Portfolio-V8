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