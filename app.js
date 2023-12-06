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
