'use strict';

app.directive('deck', function($window) {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/deck/deck.html',
    scope: {
      // find: "&",
      dial: "&"
    }
    // link: function(scope, element, attrs) {


    //   // var onYouTubeApiLoad = function() {
    //   //   gapi.client.setApiKey('AIzaSyAz3W_FsqnyZUL9ImA8BrBeInXpnCk7Kv8');
    //   // };
    //   // var onClientLoad = function() {
    //   //   gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    //   // };
    //   // var player;
    //   // var onYouTubeIframeAPIReady = function() {
    //   //   player = new YT.Player('youtubeplayer', {
    //   //     // playerVars: {
    //   //     //   autoplay: 0,
    //   //     //   html5: 1,
    //   //     //   theme: "light",
    //   //     //   modesbranding: 0,
    //   //     //   color: "white",
    //   //     //   iv_load_policy: 3,
    //   //     //   showinfo: 1,
    //   //     //   controls: 1,
    //   //     // },
    //   //     height: '200',
    //   //     width: '390',
    //   //     videoId: 'EnBKxNGhDnc', //MJVX4svJ8lw
    //   //     setVolume: 100
    //   //   });
    //     // scope.onYouTubeIframeAPIReady = function() {
    //     //   player = new YT.Player('youtubeplayer', {
    //     //     height: '200',
    //     //     width: '390',
    //     //     videoId: 'EnBKxNGhDnc', //MJVX4svJ8lw
    //     //     setVolume: 100,
    //     //     events: {
    //     //       // 'onReady': onPlayerReady
    //     //       // 'onStateChange': onPlayerStateChange
    //     //     }
    //     //   });
    //     //   // player2 = new YT.Player('youtubeplayer2', {
    //     //   //   height: '200',
    //     //   //   width: '390',
    //     //   //   videoId: 'E8OayHNF93E', //t1tjQqWqqAA
    //     //   //   setVolume: 100,
    //     //   //   events: {
    //     //   //     // 'onReady': onPlayerReady
    //     //   //     // 'onStateChange': onPlayerStateChange
    //     //   //   }
    //     //   // });
    //     // };
    //   // };
    //   // scope.search = function(track) {
    //   //   console.log('IN SEARCH', track);
    //   //   // var title;
    //   //   // var vidId;
    //   //   var q = track;
    //   //   var request = gapi.client.youtube.search.list({
    //   //     q: q,
    //   //     part: 'snippet'
    //   //   });
    //   //   request.execute(function(response) {
    //   //     console.log('MAKING REQUEST');
    //   //     scope.title = response.items[0].snippet.title;
    //   //     scope.vidId = response.items[0].id.videoId;
    //   //     console.log('Title: ', scope.title, 'Video ID: ', scope.vidId);
    //   //     // $('#search-container').html('<h4>' + title + '</h4>');

    //   //     player.cueVideoById(scope.vidId, 0, 'default');
    //   //   });
    //   //   var playLength = player.getDuration();
    //   //   console.log('Play length is: ', playLength);
    //   //   // $('#query').val('');
    //   //   scope.value = "";
    //   // };
    // }
  };
});