$(document).ready(function () {
    
    $(window).scroll(function () {
       
        if ($(window).scrollTop() > 650) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
       
    });
});