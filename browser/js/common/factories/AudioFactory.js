'use strict';
app.factory('AudioFactory', function() {
  return {
    // search: search
  };
});
var title;
var vidId;
var player;

function onYouTubeApiLoad() {
  gapi.client.setApiKey('AIzaSyAz3W_FsqnyZUL9ImA8BrBeInXpnCk7Kv8');
};

function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
};



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
    videoId: "MJVX4svJ8lw",
    setVolume: 100,
    events: {
      // 'onReady': onPlayerReady
      // 'onStateChange': onPlayerStateChange
    }
  });
}

function play() {
  player.playVideo();
}

function stop() {
  player.stopVideo();
}

// var clicked = false;

// function playPause() {

//   if (clicked) {
//     player.stopVideo();
//     $("#pButton").toggleClass("play");
//     clicked = false;
//   } else {
//     player.playVideo();
//     $("#pButton").toggleClass("pause");
//     clicked = true;
//   }
// }

var crossFade = function(element) {
  var gain1, gain2, x;
  x = parseInt(element.value) / parseInt(element.max);
  gain1 = Math.cos(x * 0.5 * Math.PI);
  gain2 = Math.cos((1.0 - x) * 0.5 * Math.PI);
  player.setVolume(gain1 * 100);
  player2.setVolume(gain2 * 100);
};