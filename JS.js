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

    document.querySelector('.card-wrapper');


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

window.addEventListener('load', function() {
    document.querySelector('.full-cv-btn').addEventListener
('click', ()=> {
    document.querySelector('.card-wrapper')
    .style.display = 'none';

    document.querySelector('.full-cv')
    .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.slideshow')
    .style.animation = 'slideshow 20s infinite';
});

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

//BLACKROCK DETAILS:

document.querySelector('#blk-det').addEventListener
('click', ()=> {
    document.querySelector('.blk-details')
    .style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.back-btn3').addEventListener(
    'click', ()=> {
    document.querySelector('.blk-details')
    .style.display = 'none';
});


//VODAFONE DETAILS:

document.querySelector('#vf-det').addEventListener
('click', ()=> {
    document.querySelector('.vf-details')
    .style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.back-btn4').addEventListener(
    'click', ()=> {
    document.querySelector('.vf-details')
    .style.display = 'none';
});

//ICE DETAILS:

document.querySelector('#ice-det').addEventListener
('click', ()=> {
    document.querySelector('.ice-details')
    .style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.back-btn5').addEventListener(
    'click', ()=> {
    document.querySelector('.ice-details')
    .style.display = 'none';
});

//ABBOTT DETAILS:

document.querySelector('#abbott-det').addEventListener
('click', ()=> {
    document.querySelector('.abbott-details')
    .style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.back-btn6').addEventListener(
    'click', ()=> {
    document.querySelector('.abbott-details')
    .style.display = 'none';
});

//NU SKIN DETAILS:

document.querySelector('#nuskin-det').addEventListener
('click', ()=> {
    document.querySelector('.nuskin-details')
    .style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.back-btn7').addEventListener(
    'click', ()=> {
    document.querySelector('.nuskin-details')
    .style.display = 'none';
});