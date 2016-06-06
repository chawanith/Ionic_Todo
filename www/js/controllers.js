angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('TodoCtrl', function($scope, $ionicModal) {      
   
	// Item default
	
  $scope.tasks = [{
    task_id : 1,
    task_title : 'Go to school',
	done:false
  },{
    task_id : 2,
    task_title : 'Read a book',
	done:false
  }];
	
	// show Modal
	
  $ionicModal.fromTemplateUrl('templates/modal.html',
  {
    scope: $scope

  }).then(function(modal) {
    $scope.modal = modal;

  });

  $scope.createTask = function(Todo) {
    $scope.tasks.push({ task_title : Todo.newTitle, done:false});
	$scope.modal.hide();

  };
	
  // Delete item
	
  $scope.onItemDelete = function(item) {
    $scope.tasks.splice($scope.tasks.indexOf(item), 1);
  };
})

.controller('CameraCtrl', function($scope, $cordovaCamera) {
		
	$scope.pictureUrl = 'http://placehold.it/300x300';
    $scope.takePicture = function() {
        var options = {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
		}
        $cordovaCamera.getPicture(options)
          .then(function(data) {
              console.log('camera data: ' + angular.toJson(data));
              $scope.pictureUrl = data;
          }, function(error){
			
          });
    };
});