'use strict';

/**
 * @ngdoc function
 * @name exercise2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exercise2App
 */
angular.module('exercise2App')
    .controller('myctrl', function($scope) {
        $scope.btn = 'Click';
        $scope.clsSuccess = 'btn-success';
        $scope.clsError = 'btn-danger';
        $scope.successBtn = function() {
            window.alert('I am success button');
        };
        $scope.errorBtn = function() {
            window.alert('I am error button');
        };
    });