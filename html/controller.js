const ipc = require('electron').ipcRenderer;
const services = require('./services.js');
var app = angular.module("myApp", ["ngRoute"]);
app.controller('myCtrl', function($scope) {
    //Declare All your Variables here
    $scope.displayProductsInfo = true;
    //Loading all the Products
    services.getProducts(function(res) {
            $scope.products = res;
        })
        //Retrieving data of a Particular Product
    $scope.displayProducts = function(x) {
        $scope.displayProductsInfo = false;
        $scope.itemname = x.itemname;
        $scope.itemid = x.itemid;
        $scope.pickupdate = x.pickupdate;
        $scope.deliverydate = x.deliverydate;
        $scope.price = x.price;
        $scope.deliveryaddress = x.deliveryaddress;
        $scope.dimension = x.dimension;
        $scope.weight = x.weight;
        services.getProductInfo(function(data) {
            //Write your Operations on the Retrieved Data
        })
    };

});



app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "dashboard.html"
        })
        .when("/dashboard", {
            templateUrl: "dashboard.html"
        })
        .when("/basictable", {
            templateUrl: "basic-table.html"
        })
        .when("/fontawesome", {
            templateUrl: "fontawesome.html"
        })
        .when("/maps", {
            templateUrl: "map-google.html"
        })
        .when("/error", {
            templateUrl: "404.html"
        })

    .when("/profile", {
        templateUrl: "profile.html"
    });
})