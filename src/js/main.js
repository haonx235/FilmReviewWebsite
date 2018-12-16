$(document).ready(function(){
    $('.go-to-top').click(function() {
        $(window.opera ? 'html' : 'html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
    $('.carousel').carousel({
        interval: false
    });
});