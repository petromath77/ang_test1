/**
 * Created by Admin on 31.05.2017.
 */
'use strict';

var realtApp = angular.module('realtApp', ['ngRoute']);



realtApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:'template/home.html',
            controller:'ApartmentsCtrl'
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
            controller:'ScrollController'
        })
        .when('/studio',{
            templateUrl:'template/studio.html',
            controller:'ApartmentsCtrl'
        })
        .when('/two-rooms',{
            templateUrl:'template/twoRooms.html',
            controller:'ApartmentsCtrl'
        })
        .when('/large',{
        templateUrl:'template/large.html',
            controller:'ApartmentsCtrl'
         })
        .otherwise({
            redirectTo: '/home'
        });
}]);
realtApp.controller('ApartmentsCtrl',['$scope','$http', '$location','$scope', function($scope, $http, $location) {
    $http.get('apartments/apartments.json').success(function(data, status, headers, config) {
        $scope.apartments = data;
    })

}]);
realtApp.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
        $scope.gotoBottom = function() {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('bottom');

            // call $anchorScroll()
            $anchorScroll();
        };
    }]);
