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

    // Check login
    window.username = localStorage.getItem("username")
    if (window.username) {
        $('.only-show-not-login').hide()
        $('.only-show-login .username').text(window.username)
        $('.only-show-login .dropdown-item.logout').click(() => {
            localStorage.setItem("username", "")
            location.reload();
        })
    } else {
        $('.only-show-login').hide()
    }

    $('#loginModal').submit(e => {
        e.preventDefault()
        let uname = $(e.target).find("input[name=username]")[0].value
        localStorage.setItem("username", uname)
        location.reload();
    })

    // Rating changed
    $(".rate").on("change", function (ev, data) {
        $('#rate-point').text(data.to + " / 10");
    });
});