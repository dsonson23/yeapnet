var app = angular.module("yeapApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    

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
    });
});