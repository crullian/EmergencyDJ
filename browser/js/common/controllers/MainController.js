app.controller('MainCtrl', function($scope, AudioFactory) {

  // $scope.onYouTubeApiLoad = function() {
  //   gapi.client.setApiKey('AIzaSyAz3W_FsqnyZUL9ImA8BrBeInXpnCk7Kv8');
  // };

  // $scope.onClientLoad = function() {
  //   gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
  // };

  // $scope.onYouTubeIframeAPIReady = function() {
  //   player = new YT.Player('youtubeplayer', {
  //     height: '200',
  //     width: '390',
  //     videoId: 'EnBKxNGhDnc', //MJVX4svJ8lw
  //     setVolume: 100,
  //     events: {
  //       // 'onReady': onPlayerReady
  //       // 'onStateChange': onPlayerStateChange
  //     }
  //   });
  //   // player2 = new YT.Player('youtubeplayer2', {
  //   //   height: '200',
  //   //   width: '390',
  //   //   videoId: 'E8OayHNF93E', //t1tjQqWqqAA
  //   //   setVolume: 100,
  //   //   events: {
  //   //     // 'onReady': onPlayerReady
  //   //     // 'onStateChange': onPlayerStateChange
  //   //   }
  //   // });
  // };

  // $scope.search = function() {
  //   var title;
  //   var vidId;
  //   var player;
  //   var q = $('#query').val();
  //   var request = gapi.client.youtube.search.list({
  //     q: q,
  //     part: 'snippet'
  //   });
  //   request.execute(function(response) {
  //     title = response.items[0].snippet.title;
  //     vidId = response.items[0].id.videoId;
  //     console.log('Title: ', title, 'Video ID: ', vidId);
  //     $('#search-container').html('<h4>' + title + '</h4>');
  //     player.cueVideoById(vidId, 0, 'default');
  //   });
  //   var playLength = player.getDuration();
  //   console.log('Play length is: ', playLength);
  //   $('#query').val('');
  // };
});