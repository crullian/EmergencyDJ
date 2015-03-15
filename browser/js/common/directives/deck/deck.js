'use strict';

app.directive('deck', function() {
  return {
    restrict: 'E',
    scope: {
      title: "=",
      vid: "="
    },
    templateUrl: 'js/common/directives/deck/deck.html',
    link: function(scope, element, attrs) {



      scope.$watch('vid', function(vid) {
        console.log('yo the vid changed!', vid);
        // console.log("Title: ", title, "Video ID: ", vidId);
        // $('#search-container').html('<h4>' + title + '</h4>');
        // player.cueVideoById(vidId, 0, "default");
        element.find('.vid').html('<p>' + vid + '</p>');
      });
    }
  };
});