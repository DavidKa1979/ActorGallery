var app = angular.module("movieApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "home.html",
        controller: "homeCtrl"
    }).when("/actors", {
        templateUrl: "actors.html",
        controller: "actorsCtrl"
    }).when("/movie", {
        templateUrl: "movie.html",
        controller: "movieCtrl"
    }).when("/movie/:id", {
        templateUrl: "movieDetails.html",
        controller: "movieDetailsCtrl"
    });
        })