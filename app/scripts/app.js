'use strict';

/**
 * @ngdoc overview
 * @name hduiApp
 * @description
 * # hduiApp
 *
 * Main module of the application.
 */
angular
  .module('hduiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/grid', {
        templateUrl: 'views/grid.html',
        controller: 'GridCtrl'
      })
      .when('/type', {
        templateUrl: 'views/type.html',
        controller: 'TypeCtrl'
      })
      .when('/buttons', {
        templateUrl: 'views/buttons.html',
        controller: 'ButtonsCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/nav', {
        templateUrl: 'views/nav.html',
        controller: 'NavCtrl'
      })
      .when('/bars', {
        templateUrl: 'views/bars.html',
        controller: 'BarsCtrl'
      })
      .when('/image', {
        templateUrl: 'views/image.html',
        controller: 'ImageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
