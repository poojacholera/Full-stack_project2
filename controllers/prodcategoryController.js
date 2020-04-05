var mongoose = require("mongoose");
var Category = require("../models/productcategory");
var Product = require("../models/products");
var async = require("async");
const validator = require("express-validator");
// Display list of all Category.
exports.productcategory_list = function(req, res, next) {
  //res.send('NOT IMPLEMENTED: product category list');
  //TODO
  console.log('myparam: '+ req.param.path);

  Product.find({},'productcategory').exec(function(err, list_productcategory) {
    if (err) {
      return next(err);
    }
    //success, so render
    console.log("list_productcategory: "+list_productcategory);
    /*res.render("productcategory_list", {
      title: "Product Category List",
      productcategory_list: list_productcategory
    });*/
    res.json({productcategory_list: list_productcategory});
  });
};

// Display detail page for a specific Category.
exports.productcategory_detail = function(req, res, next) {
  //  res.send('NOT IMPLEMENTED: product category detail: ' + req.params.id);
  console.log("path is "+ JSON.parse(req));
  //TODO
  async.parallel(
    {
      category: function(callback) {
        Category.findById(req.params.path).exec(callback);
      },
      category_products: function(callback) {
        Product.find({ productcategory: req.params.path }).exec(callback);
      }
    },
    function(err, results) {
      if (err) {
        return next(err);
      }
      if (results.category == null) {
        // No results.
        var err = new Error("product category not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render("productcategory_detail", {
        title: "Product Category Detail",
        category: results.category,
        category_products: results.category_products
      });
    }
  );
};
// Display Category create form on GET.
exports.productcategory_create_get = function(req, res, next) {
  //console.log("in get " + "res");
  res.render("productcategory_create_form", {
    title: "Create Product Category"
  });
  //res.send('NOT IMPLEMENTED: product category create GET');
};

// Handle Category create on POST.
exports.productcategory_create_post = [
  //  res.send('NOT IMPLEMENTED: product category create POST');
  // Validate that the name field is not empty.
  validator
    .body("categoryName", "Category name required")
    .trim()
    .isLength({ min: 1 }),
  validator.sanitizeBody("name").escape(),
  (req, res, next) => {
    const errors = validator.validationResult(req);
    //console.log(req.body);
    //alert(req.body);
    var category = new Category({ name: req.body.categoryName });
    if (!errors.isEmpty()) {
      res.render("productcategory_create_form", {
        title: "Create Product Category",
        category: category,
        errors: errors.array()
      });
    } else {
      //check if category already exists
      Category.findOne({ name: req.body.categoryName }).exec(function(
        err,
        found_category
      ) {
        if (err) {
          return next(err);
        }
        if (found_category) {
          res.redirect(found_category.url);
        } else {
          category.save(function(err) {
            if (err) {
              return next(err);
            }
            res.redirect(category.url);
          });
        }
      });
    }
  }
];
// Display Category delete form on GET.
exports.productcategory_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: product category delete GET");
};

// Handle Category delete on POST.
exports.productcategory_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: product category delete POST");
};
// Display Category update form on GET.
exports.productcategory_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: product category update GET");
};

// Handle Category update on POST.
exports.productcategory_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: product category update POST");
};
