            var animatePoints = function() {

                var points = document.getElementsByClassName('point');

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