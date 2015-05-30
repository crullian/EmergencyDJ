'use strict';
app.factory('AudioFactory', function() {
  return {
    // search: search
  };
});
var title;
var title2;
var vidId;
var vidId2;
var player;
var player2;

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
    title = response.items[0].snippet.title;
    vidId = response.items[0].id.videoId;
    console.log('Title: ', title, 'Video ID: ', vidId);
    $('#search-container').html('<h4>' + title + '</h4>');
    player.cueVideoById(vidId, 0, 'default');
  });
  var playLength = player.getDuration();
  console.log('Play length is: ', playLength);
  $('#query').val('');
}

function search2() {
  var q = $('#query2').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });
  request.execute(function(response) {
    title2 = response.items[0].snippet.title;
    vidId2 = response.items[0].id.videoId;
    console.log('Title: ', title2, 'Video ID: ', vidId2);
    $('#search-container2').html('<h4>' + title2 + '</h4>');
    player2.cueVideoById(vidId2, 0, 'default');
  });
  $('#query2').val('');
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubeplayer', {
    height: '200',
    width: '390',
    videoId: '', //MJVX4svJ8lw
    setVolume: 100,
    events: {
      // 'onReady': onPlayerReady
      // 'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('youtubeplayer2', {
    height: '200',
    width: '390',
    videoId: '', //t1tjQqWqqAA
    setVolume: 100,
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

// function play() {
//   player.playVideo();
// }

// function stop() {
//   player.stopVideo();
// }

// function play2() {
//   player2.playVideo();
// }

// function stop2() {
//   player2.stopVideo();
// }
// player.on('play', function() {
//   player.play();
// });

// player.on('pause', function() {
//   player.pause();
// });

var clicked = false;

function playPause() {
  player.getDuration();
  console.log('Play length is: ', player.getDuration());
  if (clicked === true) {
    player.stopVideo();
    $('#pButton').removeClass('pause').addClass('play');
    clicked = false;
  } else {
    player.playVideo();
    $('#pButton').removeClass('play').addClass('pause');
    clicked = true;
  }
}

var clicked2 = false;

function playPause2() {
  if (clicked2 === true) {
    player2.stopVideo();
    $('#pButton2').removeClass('pause').addClass('play');
    clicked2 = false;
  } else {
    player2.playVideo();
    $('#pButton2').removeClass('play').addClass('pause');
    clicked2 = true;
  }
}

var crossFade = function(element) {
  var gain1, gain2, x;
  x = parseInt(element.value) / parseInt(element.max);
  gain1 = Math.cos(x * 0.5 * Math.PI);
  gain2 = Math.cos((1.0 - x) * 0.5 * Math.PI);
  player.setVolume(gain1 * 100);
  player2.setVolume(gain2 * 100);
};