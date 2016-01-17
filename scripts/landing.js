var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points){

    for (var i = 0; i < points.length; i++) {
      var revealPoint = function(i) {  
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0)";
        points[i].style.msTransform = "scaleX(1) translateY(0)";
        points[i].style.WebkitTransform = "scameX(1) translateY(0)";
        };
        revealPoint(i);
    }
};

$(window).load(function() {
    // #1
    if ($(window).height() > 950) {
        animatePoints();
    }
    // #2
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    // #3
    $(window).scroll(function(event) {
        // #4
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }
    });

});