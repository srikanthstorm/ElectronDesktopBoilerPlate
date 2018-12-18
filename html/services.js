var express = require('express')
var app = express()
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin123@ds163182.mlab.com:63182/electron-crud";
var bodyparser = require('body-parser');
var obj = require('./student');
mongoose.connect('mongodb://admin:admin123@ds163182.mlab.com:63182/electron-crud', { useNewUrlParser: true });
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    'extended': false
}));

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var result;

module.exports.getProducts = function(callback) {
    var products = [{
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

    callback(products);


}
module.exports.getProductInfo = function(callback) {
    var something = retrieve();
    // console.log(result)
    var ret = "test";
    console.log("inside")
    obj.find({ name: "test" }, function(err, resp) {


            //  console.log("new", resp[0]._doc);
            result = resp[0]._doc
            console.log(typeof(resp));
            console.log('response:', resp[0]._doc)
            callback(resp[0]._doc);
        })
        // return "hi";

}
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/' + 'main.html');
});
app.get('/create', function(req, res) {
    res.sendFile(__dirname + '/' + 'insert.html');
});
app.get('/update', function(req, res) {
    res.sendFile(__dirname + '/' + 'update.html');
});
app.get('/retrieve', function(req, res) {
    res.sendFile(__dirname + '/' + 'retrieve.html');
});

app.post('/data', function(req, res) {
    var data = {
        name: req.body.name,
        email: req.body.email,
        mob: req.body.mob,
        item: req.body.item,
        quantity: req.body.quantity,
        price: req.body.price
    }
    obj.addStudent(data, function(err, data) {
        if (data) {
            response = "Data inserted succesfully"
            res.send(response);
        } else {
            error = {
                "error": "Sorry insertion failed"
            }
            res.json(error);
            console.log(err);
        }
    });

});

var retrieve = function() {
    var ret = "test";
    console.log("inside")
    obj.find({ name: "test" }, function(err, resp) {
        console.log("new", resp[0]._doc);
        result = resp[0]._doc
        console.log(typeof(resp))
        return resp;
    })
};

app.post('/delete', function(req, res) {
    var name = req.body.name;
    obj.removeStudent(name, function(err, name) {
        if (name) {
            response = "retailer  Record has been deleted!"

            res.send(response);
        } else {
            error = {
                "error": "Please check entered ID"
            }
            res.json(error);
            console.log(err);
        }
    });
});
app.post('/update', function(req, res) {
    var name = req.body.name;
    var data = ({
        name: req.body.name,
        email: req.body.email,
        mob: req.body.mob,
        item: req.body.item,
        quantity: req.body.quantity,
        price: req.body.price
    });
    //Calls the function from student.js model
    obj.updateStudent(name, data, {}, function(err, student) {
        if (student) {
            response = "Retailer  Details have been updated!"
            res.send(response);
            console.log(data);
        } else {
            error = "Sorry update failed"

            res.json(error);
        }

        console.log(err);
    });
});

app.post('/entiredata', function(req, res) {
    obj.getDetails(function(err, dt) {
        console.log(dt);
        if (dt) {
            response = {
                "result": dt
            }
            res.send(dt);
        } else {
            error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
        }
    });
});