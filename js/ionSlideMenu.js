angular.module('starter', ['ionic'])

	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
	})

	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: "menu.html",
				controller: 'AppCtrl'
			})

			.state('app.playlists', {
				url: "/playlists",
				views: {
					'menuContent' :{
						templateUrl: "playlists.html",
						controller: 'PlaylistsCtrl'
					}
				}
			});


		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/playlists');
	})

	.controller('AppCtrl', function($scope) {
	})

	.controller('PlaylistsCtrl', function($scope) {

	})

	.controller('PlaylistCtrl', function($scope, $stateParams) {
	});





