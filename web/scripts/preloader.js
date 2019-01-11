(function() {
    var preload = document.getElementById("loading");
    var loading2 = 0;
    var id = setInterval(frame, 20);

    function frame() {
        if (loading2 == 100) {
            clearInterval(id);
            window.open("homepage.html", "_self")
        }
        else {
            loading2 = loading2 + 1;
            if (loading2 == 85)
                loading.style.animation = "fadeout 1.5s ease";
        }
    }
})();