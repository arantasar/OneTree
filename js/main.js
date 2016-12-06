$(document).ready(function () {
    
    $(window).scroll(function () {
       
        if ($(window).scrollTop() > 600) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
       
    });
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$(document).on('click',function(){
$('.collapse').collapse('hide');
}); 

$(".mynav ul li a[href^='#']").on('click', function (e) {
    
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
    
});

$("#section-parallax .col-sm-8 a[href^='#']").on('click', function (e) {
    
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
    
});

$(".wall-sticker a[href^='#']").on('click', function (e) {
    
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
    
});

$(".arrow a[href^='#']").on('click', function (e) {
    
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
    
});

$(".footer .scroll-to-top-button a[href^='#']").on('click', function (e) {
    
    e.preventDefault();
    
    var hash = this.hash;
    
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {
        window.location.hash = hash;
    });
    
});

$(".js-wp-1").waypoint(function (direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$(".js-wp-2").waypoint(function (direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$(".js-wp-3").waypoint(function (direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$(".js-wp-4").waypoint(function (direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$(".js-wp-5").waypoint(function (direction) {
    $('.js-wp-5').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

$(".js-wp-6").waypoint(function (direction) {
    $('.js-wp-6').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$(".js-wp-7").waypoint(function (direction) {
    $('.js-wp-7').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$(".js-wp-8").waypoint(function (direction) {
    $('.js-wp-8').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$(".js-wp-9").waypoint(function (direction) {
    $('.js-wp-9').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$(".js-wp-10").waypoint(function (direction) {
    $('.js-wp-10').addClass('animated zoomIn');
}, {
    offset: '50%'
});

$(".js-wp-11").waypoint(function (direction) {
    $('.js-wp-11').addClass('animated zoomIn');
}, {
    offset: '50%'
});

$(".js-wp-12").waypoint(function (direction) {
    $('.js-wp-12').addClass('animated zoomIn');
}, {
    offset: '50%'
});
$(".js-wp-13").waypoint(function (direction) {
    $('.js-wp-13').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

$(".js-wp-14").waypoint(function (direction) {
    $('.js-wp-14').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$(".js-wp-15").waypoint(function (direction) {
    $('.js-wp-15').addClass('animated zoomIn');
}, {
    offset: '50%'
});

$(".js-wp-16").waypoint(function (direction) {
    $('.js-wp-16').addClass('animated zoomIn');
}, {
    offset: '50%'
});

$(".js-wp-17").waypoint(function (direction) {
    $('.js-wp-17').addClass('animated zoomIn');
}, {
    offset: '50%'
});

$(".js-wp-18").waypoint(function (direction) {
    $('.js-wp-18').addClass('animated fadeInUp');
}, {
    offset: '80%'
});