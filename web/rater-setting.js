function onload(event) {

    var myDataService = {
        rate: function (rating) {
            return {
                then: function (callback) {
                    setTimeout(function () {
                        callback((Math.random() * 5));
                    }, 1000);
                }
            }
        }
    }

    var starRating5 = raterJs({
        starSize: 32,
        max: 10,
        element: document.querySelector("#rater5"),
        rateCallback: function rateCallback(rating, done) {
            this.setRating(rating);
            done();
        },
        onHover: function (currentIndex, currentRating) {
            document.querySelector('#live-rating').textContent = currentIndex + " / 10";
        },
        onLeave: function (currentIndex, currentRating) {
            if (currentRating)
                document.querySelector('#live-rating').textContent = currentRating + " / 10";
            else
                document.querySelector('#live-rating').textContent = "";
            console.log(currentIndex, currentRating);
        }
    });

    var starRating6 = raterJs({
        starSize: 32,
        max: 10,
        element: document.querySelector("#rater6"),
        rateCallback: function rateCallback(rating, done) {
            this.setRating(rating);
            done();
        },
        onHover: function (currentIndex, currentRating) {
            document.querySelector('#live-rating').textContent = currentIndex + " / 10";
        },
        onLeave: function (currentIndex, currentRating) {
            if (currentRating)
                document.querySelector('#live-rating').textContent = currentRating + " / 10";
            else
                document.querySelector('#live-rating').textContent = "";
            console.log(currentIndex, currentRating);
        }
    });
}

window.addEventListener("load", onload, false); 