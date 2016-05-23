angular.module('starter', ['ionic'])
	.controller('actionsheetCtl',function($scope, $ionicPopup, $timeout) {
		//  alert（警告） 对话框
		$scope.showAlert = function() {
			/*var alertPopup = $ionicPopup.alert({
			 title: 'Don\'t eat that!',
			 template: 'It might taste good'
			 });
			 alertPopup.then(function(res) {
			 console.log('Thank you for not eating my delicious ice cream cone');
			 });*/

			var username = $('#username');

			function alertTip(title, template) {
				$ionicPopup.alert({
					title: title,
					template: template,
					buttons: [
						{
							text: '确定',
							type: 'button-positive'
						}
					]
				});
			}


			if($.trim(username.val()) == '') {
				alertTip('提示信息', '用户名不得为空！');
			}else {
				if($.trim(username.val()).length < 2 || $.trim(username.val()).length > 6) {
					alertTip('提示信息', '用户名在2~6位之间！');
				}
			}
		};
	});












