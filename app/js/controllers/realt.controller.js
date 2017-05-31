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
            controller:''
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
realtApp.controller('myCtrl', ['$scope',function($scope) {
    $scope.name = "wewee";
}]);