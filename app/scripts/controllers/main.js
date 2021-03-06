'use strict';

/**
 * @ngdoc function
 * @name manageMaterialsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the manageMaterialsApp
 */

angular.module('manageMaterialsApp')
  .controller('MainCtrl', function ($scope,$http,$rootScope,$location) {
    $http.get($rootScope.url + '/material/isauth').then(function (response) {
      console.log(response);
      if (response.data == 0) {
        verification($http,$rootScope);
      }
    });

    $http.get($rootScope.url+'/material').then(function (response) {
      $scope.meterials = response.data;
    });
    $scope.col = 'name';//默认按name列排序
    $scope.desc = 0;//默认排序 降序
    $scope.orderButton = function (attr) {
      $rootScope.orderId = attr.meterial.id;
      $rootScope.orderName = attr.meterial.name;
      $rootScope.orderOrganization = attr.meterial.organization;
      $rootScope.orderDescription = attr.meterial.description;
      $rootScope.number = attr.meterial.number;
      $location.path('/order');
    };
    $rootScope.meterials = $scope.meterials;
  });

