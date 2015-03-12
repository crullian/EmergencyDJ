app.factory('AudioFactory', function() {
  return {
    search: function() {
      var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
      });
      request.execute(function(response) {
        var title = JSON.stringify(response.items[0].snippet.title);
        var vidId = JSON.stringify(response.items[0].id.videoId);
        $('#search-container1').html('<h3>' + title + '</h3><br />' + '<h4>' + vidId + '</h4>');
      });
    }
  }
})