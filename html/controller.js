var app = angular.module("myApp", ["ngRoute"]);


app.controller('myCtrl', function($scope) {

    $scope.displayProductsInfo = true;
    $scope.displayProducts = function(x) {

        // console.log(x);
        // alert(JSON.stringify(x));
        $scope.displayProductsInfo = false;
        $scope.itemname = x.itemname;
        $scope.itemid = x.itemid;
        $scope.pickupdate = x.pickupdate;
        $scope.deliverydate = x.deliverydate;
        $scope.price = x.price;
        $scope.deliveryaddress = x.deliveryaddress;
        $scope.dimension = x.dimension;
        $scope.weight = x.weight;

    };
    $scope.products = [{
        "itemname": "Iphone 6S",
        "itemid": "Germany",
        "pickupdate": "11-8-2018",
        "deliverydate": "19-8-2018",
        "status": "Delivered",
        "price": "$20",
        "dimension": "41 X 22 X 2.4 in",
        "weight": "9.2lb",
        "deliveryaddress": "Poulu Thota innData Analytics Quantum Hub"
    }, {
        "itemname": "Mac Book Pro",
        "itemid": "Germany",
        "pickupdate": "11-8-2018",
        "deliverydate": "19-8-2018",
        "status": "In Shipment",
        "price": "$50",
        "dimension": "43 X 2 X 2.4 in",
        "weight": "8.2lb",
        "deliveryaddress": "Prasanna innData Analytics Quantum Hub"


    }, {
        "itemname": "One plus 6T",
        "itemid": "Germany",
        "pickupdate": "11-8-2018",
        "deliverydate": "19-8-2018",
        "status": "Delivered",
        "price": "$10",
        "dimension": "43 X 13 X 2.4 in",
        "weight": "3.2lb",
        "deliveryaddress": "Pavan Gudapati innData Analytics Quantum Hub"


    }, {
        "itemname": "IBM Server Machine",
        "itemid": "Germany",
        "pickupdate": "11-8-2018",
        "deliverydate": "19-8-2018",
        "status": "In Shipment",
        "price": "$90",
        "dimension": "43 X 23 X 2.4 in",
        "weight": "11.2lb",
        "deliveryaddress": "Satish Karuturi innData Analytics Quantum Hub"


    }]




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