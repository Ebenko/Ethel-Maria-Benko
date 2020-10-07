

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


/*
if (window.cvPage.reload(true)){
    cvPage.scrollTo(0,0)
}

cvPage.addEventListener('onbeforeunload', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


const cvPage = document.querySelector('.full-cv');

window.onscroll = function() {scrollFunction()};

cvPage.onbeforeunload = function () {
    cvPage.scrollTo(0,0);
};*/

/*click handle*/

$(document).ready(function(){
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
}) ;

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
    .style.cssText = 'background: linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url("pictures/Forest.jpg") no-repeat center;';

});

/*click Short Introduction*/
document.querySelector('.introduction-btn').addEventListener(
    'click', ()=> {

        document.querySelector('.short-intro')
            .style.cssText = 'opacity: 1; visibility: visible';

        document.querySelector('.x-btn')
            .style.display = 'none';

    });


/*click back-btn2*/
document.querySelector('.back-btn2').addEventListener(
    'click', ()=> {
        document.querySelector('.short-intro')
            .style.display = 'none';

        document.querySelector('.card-wrapper')
            .style.background= '#292929';

        document.querySelector('.x-btn')
            .style.cssText = 'opacity: 1; visibility: visible';

    });

/*click Full CV*/

$(document).ready(function(){
    document.querySelector('.full-cv-btn').addEventListener
('click', ()=> {

    document.querySelector('.card-wrapper')
    .style.display = 'none';

    document.querySelector('body')
    .style.cssText = 'overflow: auto';

    document.querySelector('.full-cv')
    .style.cssText = 'opacity: 1; visibility: visible';

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

//smooth scroll down after click in sub-menu options
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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


//Dropdown menu

/*$(document).ready(function(){
    if ($(window).width() < 1000) {
        $('.menu').click(function(e) {
        e.preventDefault();
        $('.sub-menu').slideToggle();

                         $(".sub-menu",this).slideToggle('slow');

                        return true;
        });
    }});*/
/*$(document).on("click", function(event){
    let $trigger = $(".menu");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".sub-menu").slideUp();
    }
});*/
/* $(this).toggleClass("active");
 $("ul", this).slideToggle("slow");*/


$(document).ready(function(){
    if ($(window).width() < 1410) {
        $(".menu").click(function(){
            $(".sub-menu").slideToggle('slow');

            return true;
    });
    }
});


/*click email icon
document.querySelector('.email').addEventListener
('click', ()=> {

    document.querySelector('.email-popup')
        .style.cssText = 'opacity: 1; visibility: visible';
});*/
/*click back-btn8
document.querySelector('.back-btn8').addEventListener(
    'click', ()=> {
        document.querySelector('.email-popup')
            .style.display = 'none';

        document.querySelector('.card-wrapper')
            .style.background= '#292929';

    });*/


    //BLACKROCK DETAILS:
/*
document.querySelector('.blk').addEventListener
('click', ()=> {
    document.querySelector('.blk-details')
        .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.vf-details', '.ice-details', '.abbott-details', '.nuskin-details')
        .style.display = 'none';
});*/

document.querySelector('.blk').addEventListener(
    'click', ()=> {

        document.querySelector('.blk-details')
            .style.cssText = 'opacity: 1; visibility: visible';

        document.querySelector('.blk-background')
            .style.cssText = 'opacity: 1; visibility: visible';

});

document.querySelector('.back-btn3').addEventListener(
    'click', ()=> {
        document.querySelector('.blk-details')
            .style.display = 'none';

        document.querySelector('.blk-background')
            .style.display = 'none';
    });

/*/
window.push = function() {pushfunction()};

    function pushfunction() {

    $('.blk').click(function(e) {
        e.preventDefault();
        $('body').css('overflow', 'auto');
    });*/

/*
$(document).on('hidden.bs.modal', function () {
    $('body').addClass('modal-open');
});*/

    //VODAFONE DETAILS:

document.querySelector('.vf').addEventListener
('click', ()=> {
   document.querySelector('.vf-details')
        .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.vf-background')
        .style.cssText = 'opacity: 1; visibility: visible';

    /*document.querySelector('.blk-details', '.ice-details', '.abbott-details', '.nuskin-details')
        .style.display = 'none';

    document.getElementById('.blk-details', '.ice-details', '.abbott-details', '.nuskin-details')
        .addEventListener("click", function(event){
            event.preventDefault()
                }


    window.disabled = function() {DisableNextButton()};
    function DisableNextButton('.blk-details', '.ice-details', '.abbott-details', '.nuskin-details')
    {
        document.getElementById('.blk-details', '.ice-details', '.abbott-details', '.nuskin-details')
            .disabled = 'true';
    }*/

});

document.querySelector('.back-btn4').addEventListener(
    'click', ()=> {
    document.querySelector('.vf-details')
        .style.display = 'none';

    document.querySelector('.vf-background')
        .style.display = 'none';
});

    //ICE DETAILS:

document.querySelector('.ice').addEventListener
('click', ()=> {
    document.querySelector('.ice-details')
        .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.ice-background')
        .style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.back-btn5').addEventListener(
    'click', ()=> {
    document.querySelector('.ice-details')
        .style.display = 'none';

    document.querySelector('.ice-background')
        .style.display = 'none';
});

    //ABBOTT DETAILS:

document.querySelector('.abbott').addEventListener
('click', ()=> {
    document.querySelector('.abbott-details')
        .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.abbott-background')
        .style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.back-btn6').addEventListener(
    'click', ()=> {
    document.querySelector('.abbott-details')
        .style.display = 'none';

    document.querySelector('.abbott-background')
        .style.display = 'none';
});

    //NU SKIN DETAILS:

document.querySelector('.nuskin').addEventListener
('click', ()=> {
    document.querySelector('.nuskin-details')
        .style.cssText = 'opacity: 1; visibility: visible';

    document.querySelector('.nuskin-background')
        .style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.back-btn7').addEventListener(
    'click', ()=> {
    document.querySelector('.nuskin-details')
        .style.display = 'none';

    document.querySelector('.nuskin-background')
        .style.display = 'none';
});