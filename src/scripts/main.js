$(document).ready(function () {
    $('.go-to-top').click(function () {
        $(window.opera ? 'html' : 'html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

    /* Carousel */
    $('.carousel').carousel({
        interval: false
    });

    /* Search */
    $('#searchButton').click(function () {
        window.open("search.html", "_self");
    })
    $('#usersSearch').keypress(function (e) {
        if (e.which == 13) {//Enter key pressed
            $('#searchButton').click();//Trigger search button click event
        }
    });
});