'use strict';
angular.module('yashCRM')
.controller('LoginCtrl',function($scope){
    $scope.title = "Welcome to Login Screen";
	$scope.message = "hello";
    $scope.value = 2;
    
    $scope.firstName = '';
    $scope.lastName = '';
    
    $scope.getFullName = function(){
        return $scope.firstName + ' ' + $scope.lastName;
};
});