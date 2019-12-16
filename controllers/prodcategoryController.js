var mongoose = require('mongoose');
var Category = require('../models/productcategory');
var Product = require('../models/product');
var async = require('async');
// Display list of all Category.
exports.productcategory_list = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: product category list');
    Category.find().exec(function(err, list_productcategory){
      if(err){return next(err);}
      //success, so render
      res.render('productcategory_list',{title: 'Product Category List', productcategory_list: list_productcategory});
    });
};

// Display detail page for a specific Category.
exports.productcategory_detail = function(req, res, next) {
  //  res.send('NOT IMPLEMENTED: product category detail: ' + req.params.id);
  //var id = mongoose.Types.ObjectId(req.params.id);
  async.parallel({
     category: function(callback){
       Category.findById(req.params.id)
              .exec(callback);
     },
     category_products: function(callback) {
            Product.find({ 'productcategory': req.params.id })
              .exec(callback);
    },
  },function(err, results) {
      if (err) { return next(err); }
      if (results.category==null) { // No results.
         var err = new Error('product category not found');
         err.status = 404;
         return next(err);
      }
      // Successful, so render
      res.render('productcategory_detail', { title: 'Product Category Detail', category: results.category, category_products: results.category_products } );

  });
};
// Display Category create form on GET.
exports.productcategory_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product category create GET');
};

// Handle Category create on POST.
exports.productcategory_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product category create POST');
};
// Display Category delete form on GET.
exports.productcategory_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product category delete GET');
};

// Handle Category delete on POST.
exports.productcategory_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product category delete POST');
};
// Display Category update form on GET.
exports.productcategory_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product category update GET');
};

// Handle Category update on POST.
exports.productcategory_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product category update POST');
};
