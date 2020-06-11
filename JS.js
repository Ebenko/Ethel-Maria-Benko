/*click handle*/
document.querySelector('.card-btn').addEventListener
('click', ()=> {
    document.querySelector('.card-btn')
        .style.display = 'none';

    document.querySelector('.Initial')
        .style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.in')
        .style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.x-btn')
        .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.card-wrapper')
         .style.background= '#292929';


});

/*click x-btn*/
document.querySelector('.x-btn').addEventListener(
    'click', ()=> {
    document.querySelector('.card-btn')
    .style.display = 'flex';

    document.querySelector('.Initial')
    .style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.in')
    .style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.x-btn')
    .style.cssText = 'opacity: 0; visibility: hidden';

    document.querySelector('.card-wrapper')
    .style.cssText = 'background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("Forest.jpg") no-repeat center;';

});

/*click Full CV*/
document.querySelector('.full-cv-btn').addEventListener
('click', ()=> {
    document.querySelector('.card-wrapper')
    .style.display = 'none';

    document.querySelector('.full-cv')
    .style.cssText = 'opacity: 1; visibility: visible';
});

/*click back-btn*/
document.querySelector('.back-btn').addEventListener(
    'click', ()=> {
    document.querySelector('.full-cv')
    .style.display = 'none';

    document.querySelector('.card-wrapper')
    .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.card-wrapper')
    .style.background= '#292929';

});

/*click Short Introduction*/
document.querySelector('.introduction-btn').addEventListener
('click', ()=> {

    document.querySelector('.short-intro')
    .style.cssText = 'opacity: 1; visibility: visible';
});

/*click back-btn2*/
document.querySelector('.back-btn2').addEventListener(
    'click', ()=> {
    document.querySelector('.short-intro')
    .style.display = 'none';

    document.querySelector('.card-wrapper')
    .style.background= '#292929';

});
