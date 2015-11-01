angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('HomeCtrl', function($scope, $http){
  /*$scope.data = [
    {id: 1, desc: 'description singkat', title: 'Sepaidermen', img: 'img/ionic.png'},
    {id: 2, desc: 'description singkat', title: 'XMen', img: 'img/ionic.png'},
    {id: 3, desc: 'description singkat', title: 'Maling Kundang', img: 'img/ionic.png'},
    {id: 4, desc: 'description singkat', title: 'Film Biru', img: 'img/ionic.png'},
    {id: 5, desc: 'description singkat', title: 'Tukang Bubur Naik Haji', img: 'img/ionic.png'}
  ]*/

  $http.get('http://telkomsel.oncoding.net/api/get_posts/')
    .success(function(x){
      $scope.data = x;
    })
    .error(function(data){

    });

})

.controller('HomeDetailCtrl', function($scope, $stateParams, $http){
  $http.get('http://telkomsel.oncoding.net/api/get_post/?id='+$stateParams.id)
    .success(function(x){
      $scope.data = x.post;
    });
});
