angular.module('starter', ['ionic'])

	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	})

	.controller( 'actionsheetCtl',['$scope',function($scope){

		$scope.devList = [
			{ text: "记住密码", checked: true }
		];

		$scope.pushNotificationChange = function() {
			console.log('Push Notification Change', $scope.pushNotification.checked);
		};

		$scope.pushNotification = { checked: true };
		$scope.emailNotification = 'Subscribed';

	}]);

























