var formApp = angular.module('FormApp', [ 'xlat', 'ngRoute', 'pascalprecht.translate' ]);

formApp.controller('FormController', [ '$scope', '$window', '$http', 'xlatService',
		function($scope, $window, $http, xlatService) {
			$scope.colorOptions = [ 'RED', 'GREEN', 'BLUE' ];
			$scope.messages = [];
			$scope.data = {
				firstName : 'Dennis',
                age: 31
			};
			$scope.submit = function() {
                alert(angular.toJson($scope.data));
				$http({
					method : 'POST',
					url : './form.do',
					data : $scope.data
				}).success(function(data, status, headers, config) {
					$window.location.replace('./confirm.html');
				}).error(function(data, status, headers, config) {
					if (status == 400) {
						$scope.messages = data;
                        alert(angular.toJson(data));
					} else {
						alert('Unexpected server error.');
					}
				});
			};

			$scope.setCurrentLanguage = function(language) {
				xlatService.setCurrentLanguage(language);
			};
            //
			//computeNeeded = function() {
			//	$scope.data.hello = 'Hello ' + $scope.data.firstName;
			//};

			//$scope.$watch('data.firstName', computeNeeded);

			// Clock feature
			$scope.clock = {
				now : new Date()
			};

			var updateClock = function() {
				$scope.clock.now = new Date();
			};

			setInterval(function() {
				$scope.$apply(updateClock);
			}, 1000);

			updateClock();

			// Modules example

			// End of FormController
		} ]);

formApp.config(function($translateProvider) {
	$translateProvider.translations('en', {
		HEADER : 'Please enter your information:',
		BUTTON_TEXT_VI : 'Vietnamese',
		BUTTON_TEXT_EN : 'English',
		FIRST_NAME : 'First name:',
		AGE : 'Age:',
		FAV_COLOR : 'Favorite color:',
		COLOR_RED : 'Red',
		COLOR_GREEN : 'Green',
		COLOR_BLUE : 'Blue',
		SUBMIT : 'Submit the form',
        FIRST_NAME_REQUIRED: 'First name is required.',
        FIRST_NAME_MINLENGTH: 'First name must have at least {{len}} characters.',
        FIRST_NAME_MAXLENGTH: 'First name must have at most {{len}} characters.',
        AGE_REQUIRED: 'Age is required.',
        AGE_NEGATIVE: 'Age cannot be negative.',
        AGE_MAX: 'Age cannot be higher than {{years}}.',
        AGE_INTEGER: 'Age must be an integer number.',
        INCORRECT_FIELDS: function(parameters) {
            console.log(parameters);
            if(parameters.n == 1) return 'INCORRECT_FIELDS_SINGULAR';
            else return 'INCORRECT_FIELDS_PLURAL';
        },
        INCORRECT_FIELDS_SINGULAR: '1 input field was incorrect.',
        INCORRECT_FIELDS_PLURAL: '{{n}} input fields were incorrect.'
	});
	$translateProvider.translations('vi', {
		HEADER : 'Xin nhap thong tin cua ban:',
		BUTTON_TEXT_VI : 'Tieng Viet',
		BUTTON_TEXT_EN : 'Tieng Anh',
		FIRST_NAME : 'Ten:',
		AGE : 'Tuoi:',
		FAV_COLOR : 'Mau sac yeu thich:',
		COLOR_RED : 'Do',
		COLOR_GREEN : 'Xanh',
		COLOR_BLUE : 'Xanh da troi',
		SUBMIT : 'Gui Di'
	});
	$translateProvider.preferredLanguage('en');
	// $translateProvider.determinePreferredLanguage();
});

formApp.controller('TranslateController', function($translate, $scope) {
	$scope.changeLanguage = function(langKey) {
		$translate.use(langKey);
	};
});

formApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/ShowPersonDetails/:person', {
		templateUrl : 'templates/show_person_details.html',
		controller : 'ShowPersonDetailsController'
	});
} ]);

formApp.controller('ShowPersonDetailsController', function($scope, $routeParams) {
	$scope.person = {};
	$scope.person = angular.fromJson($routeParams.person);
});
