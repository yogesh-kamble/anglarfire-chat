'use strict';

/**
 * @ngdoc function
 * @name angularchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularchatApp
 */
angular.module('angularchatApp')
  .controller('MainCtrl', function ($scope, $firebaseArray) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var ref = new Firebase('https://flickering-heat-9.firebaseio.com/messages')
    $scope.messages = $firebaseArray(ref);
    
    $scope.sendMessage = function(){
        var params = {};
        params['name'] = $scope.name;
        params['message'] = $scope.message;
        $scope.messages.$add(params);
    }
  });
