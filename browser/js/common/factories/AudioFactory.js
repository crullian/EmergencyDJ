'use strict';
app.factory('AudioFactory', function() {
  return {
    // search: search
  };
});

var vidId;
var player;

var onYouTubeApiLoad = function() {
  gapi.client.setApiKey('AIzaSyAz3W_FsqnyZUL9ImA8BrBeInXpnCk7Kv8');
};

function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
};

function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });
  request.execute(function(response) {
    var title = response.items[0].snippet.title;
    vidId = response.items[0].id.videoId;
    console.log("Title: ", title, "Video ID: ", vidId);
    $('#search-container').html('<h4>' + title + '</h4>');
    player.loadVideoById(vidId, 0, "default");
  });
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubeplayer', {
    height: '100',
    width: '175',
    videoId: "",
    events: {
      // 'onReady': onPlayerReady
      // 'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.stopVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;

// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }

function play() {
  player.playVideo();
}

function stop() {
  player.stopVideo();
}