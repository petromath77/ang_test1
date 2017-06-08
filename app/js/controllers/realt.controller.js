/**
 * Created by Admin on 31.05.2017.
 */
'use strict';

var realtApp = angular.module('realtApp', ['ngRoute']);



realtApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:'template/home.html',
            controller:''
        })
        .when('/blog',{
            templateUrl:'template/blog.html',
            controller:''
        })
        .when('/apartments',{
            templateUrl:'template/apartments.html',
            controller:'ApartmentsCtrl'
        })
        .when('/testimonials',{
            templateUrl:'template/testimonials.html',
            controller:''
        })
        .when('/contact',{
            templateUrl:'template/contact.html',
            controller:''
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
realtApp.controller('ApartmentsCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
    $http.get('apartments/apartments.json').success(function(data, status, headers, config) {
        $scope.apartments = data;
    });
}]);