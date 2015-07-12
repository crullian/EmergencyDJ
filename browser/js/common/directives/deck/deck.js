'use strict';

// app.controller('SearchCtrl', function($scope, AudioFactory) {
//   // $scope.search = AudioFactory.search();
// });

app.directive('deck', function(AudioFactory) {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/deck/deck.html',
    scope: {
      search: "&"
    }
    // link: function(scope, element, attrs) {
    //   // scope.onYouTubeApiLoad = function() {
    //   //   gapi.client.setApiKey('AIzaSyAz3W_FsqnyZUL9ImA8BrBeInXpnCk7Kv8');
    //   // };
    //   // scope.onClientLoad = function() {
    //   //   gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    //   // };
    //   // scope.onYouTubeIframeAPIReady = function() {
    //   //   player = new YT.Player('youtubeplayer', {
    //   //     height: '200',
    //   //     width: '390',
    //   //     videoId: 'EnBKxNGhDnc', //MJVX4svJ8lw
    //   //     setVolume: 100,
    //   //     events: {
    //   //       // 'onReady': onPlayerReady
    //   //       // 'onStateChange': onPlayerStateChange
    //   //     }
    //   //   });
    //   //   // player2 = new YT.Player('youtubeplayer2', {
    //   //   //   height: '200',
    //   //   //   width: '390',
    //   //   //   videoId: 'E8OayHNF93E', //t1tjQqWqqAA
    //   //   //   setVolume: 100,
    //   //   //   events: {
    //   //   //     // 'onReady': onPlayerReady
    //   //   //     // 'onStateChange': onPlayerStateChange
    //   //   //   }
    //   //   // });
    //   // };
    // }
  };
});