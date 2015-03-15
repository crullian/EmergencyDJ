'use strict';


function AudioController($scope, $rootScope) {

  $scope.title = 'yo my title';
  $scope.vid = 'sweet fuckin vid';

  /*$scope.search = function() {
    var request = gapi.client.youtube.search.list({
      q: $scope.q,
      part: 'snippet'
    });
    request.execute(function(response) {
      $scope.title = response.items[0].snippet.title;
      $scope.vid = response.items[0].id.videoId;
      $rootScope.$apply();
    });
    //$("#query").val("");
  }*/
};

app.controller('AudioController', AudioController);