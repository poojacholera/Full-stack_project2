var Product = require('../models/product');
var Category = require('../models/productcategory');
var ProductInstance = require('../models/productinstance');

var async = require('async');

exports.index = function(req, res) {
     async.parallel({
       product_count: function(callback) {
            Product.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        product_instance_count: function(callback) {
            ProductInstance.countDocuments({}, callback);
        },
        product_instance_count: function(callback) {
            ProductInstance.countDocuments({status:'In Stock'}, callback);
        },
        productcategory_count: function(callback) {
            Category.countDocuments({}, callback);
        }
      }, function(err, results) {
      res.render('index', { title: 'production manager Home', error: err, data: results });
     });
};
// Display list of all products.
exports.product_list = function(req, res) {
    res.send('NOT IMPLEMENTED: product list');
};
// Display detail page for a specific product.
exports.product_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: product detail: ' + req.params.id);
};
// Display product create form on GET.
exports.product_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product create GET');
};

// Handle product create on POST.
exports.product_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product create POST');
};
// Display product delete form on GET.
exports.product_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product delete GET');
};

// Handle product delete on POST.
exports.product_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product delete POST');
};
// Display product update form on GET.
exports.product_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product update GET');
};

// Handle product update on POST.
exports.product_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product update POST');
};
