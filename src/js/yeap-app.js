var app = angular.module("yeapApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    $locationProvider.html5Mode(true);

    .when("/home", {
        templateUrl : "home.html"
    })
    .when("/basic-reseller", {
        templateUrl : "basic-reseller.html"
    })
    .when("/pro-reseller", {
        templateUrl : "pro-reseller.html"
    })

    .when("/support", {
        templateUrl : "support.html"
    })

    .when("/my-account", {
        templateUrl : "login.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    })
    .otherwise({
        redirectTo: "route-index.html"
    });
});