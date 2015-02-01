'use strict';

/**
 * @ngdoc function
 * @name hduiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hduiApp
 */
angular.module('hduiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.title = 'Hero Intro';
    $scope.toggle = function(){
      angular.element('.hero').toggle('slow');
      angular.element('.code').toggle('slow');
    };

  });
