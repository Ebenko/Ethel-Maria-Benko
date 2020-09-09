
/*click handle*/
document.querySelector('.card-btn').addEventListener
('click', ()=> {
    document.querySelector('.card-btn')
        .style.display = 'none';

    document.querySelector('.Initial')
        .style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.contact-icons')
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
    document.querySelector('.contact-icons')
    .style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.x-btn')
    .style.cssText = 'opacity: 0; visibility: hidden';

    document.querySelector('.card-wrapper')
    .style.cssText = 'background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("pictures/Forest.jpg") no-repeat center;';

});

/*click Full CV*/

window.addEventListener('load', function(){

    document.querySelector('.full-cv-btn').addEventListener
('click', ()=> {

    document.querySelector('.card-wrapper')
    .style.display = 'none';

    document.querySelector('body')
    .style.cssText = 'overflow: auto';

    document.querySelector('.full-cv')
    .style.cssText = 'opacity: 1; visibility: visible'
;

    document.querySelector('.slideshow')
    .style.animation = 'slideshow 20s infinite';

});
});


/*click logo to back*/
document.querySelector('.logo').addEventListener(
    'click', ()=> {
    document.querySelector('.full-cv')
    .style.display = 'none';

    document.querySelector('.card-wrapper')
    .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.card-wrapper')
    .style.background= '#292929';
});

/*click back-btn to top*/

/*document.querySelector('.back-btn').addEventListener(
    'click', ()=> {
    window.scrollTo(screenTop);

});

$('html, body').animate({
    scrollTop: $(".back-btn").offset().top
}, 0);});*/

const btnScroll = document.querySelector('.back-btn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScroll.style.display = "block";
    } else {
        btnScroll.style.display = "none";
    }
}

btnScroll.addEventListener('click', function() {
   window.scrollTo({
       top: 0,
       left: 0,
      behavior: 'smooth'
   });
});



/*
//Get the button:
mybutton = document.getElementsByClassName("back-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScroll.style.display = "block";
    } else {
        btnScroll.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/


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


/*click email icon
document.querySelector('.email').addEventListener
('click', ()=> {

    document.querySelector('.email-popup')
        .style.cssText = 'opacity: 1; visibility: visible';
});*/


/*click back-btn8*/
document.querySelector('.back-btn8').addEventListener(
    'click', ()=> {
        document.querySelector('.email-popup')
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