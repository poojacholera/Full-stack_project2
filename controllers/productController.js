var mongoose = require('mongoose');
//var ObjectId = require('mongodb').ObjectID;
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
        product_instance_available_count: function(callback) {
            ProductInstance.countDocuments({status:'In Stock'}, callback);
        },
        product_category_count: function(callback) {
            Category.countDocuments({}, callback);
        }
      }, function(err, results) {
      res.render('index', { title: 'Product Manager ', error: err, data: results });
     });
};
// Display list of all products.
exports.product_list = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: product list');
    Product.find({},'name').exec(function(err,list_products){
      if(err){return next(err);}
      //if success, then render
      res.render('product_list', {title:'Product List', product_list: list_products});
    });
};
// Display detail page for a specific product.
exports.product_detail = function(req, res, next) {
  //var myid = JSON.parse(req.params.id);
  //var id = ObjectId(req.params.id);
  //var id = req.params._id;
    async.parallel({
      product : function(callback){
        Product.findById(req.params.id)
          .populate('productcategory')
          .exec(callback);
      },
      product_instance : function(callback){
        ProductInstance.find({'product': req.params.id})
          .exec(callback);
      },
    },function(err, results){
        if(err){return next(err);}
        if(results.product==null){ // no results found
          var err = new Error('Product not found');
          err.status = 404;
          return next(err);
        }
        // if success, then render
        res.render('product_detail',{title:results.product.name, product: results.product , product_instance:results.product_instance});
    });
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
