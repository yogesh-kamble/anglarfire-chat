'use strict';

/**
 * @ngdoc function
 * @name angularchatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularchatApp
 */
angular.module('angularchatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
