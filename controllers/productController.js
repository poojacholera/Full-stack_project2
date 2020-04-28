var mongoose = require("mongoose");
const {ObjectId} = require('mongodb');
var Product = require("../models/products");
var Category = require("../models/productcategory");
var ProductInstance = require("../models/productinstance");
const {body, validationResult} = require("express-validator/check");
const {sanitizeBody} = require("express-validator/filter");

var async = require("async");

exports.index = function (req, res) {
    async.parallel(
        {
            product_count: function (callback) {
                Product.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
            },
            product_instance_available_count: function (callback) {
                Product.countDocuments({status: "stock"}, callback);
            },
            product_category_count: function (callback) {
                Product.countDocuments(
                    {productcategory: "$productcategory"},
                    callback
                );
            }
        },
        function (err, results) {
            res.render("index", {
                title: "Product Manager",
                error: err,
                data: results
            });
        }
    );
};
// Display list of all products.
exports.product_list = function (req, res, next) {
    //res.send('NOT IMPLEMENTED: product list');
    /*async.parallel(
        {
          product: function (callback) {
            console.log("my params " + JSON.stringify(req.params));
            var query = Product.findOne({_id: ObjectId(req.params.id)}, {productname: 1}).exec(function (err, product) {
              if (err) {
                   return handleError(err);
              }
              //console.log('%s is a %s.', product.id, product.productname,);
              console.log('my product is %s.',  product.productname,);
              Product.find({productname: product.productname})
                  .populate("product")
                  .exec(callback);
            });
          }
        },
        function (err, results) {
          console.log("results: " + JSON.stringify(results));
          console.log("error: " + err);
          if (err) {
            return next(err);
          }
          if (results.product == null) {
            // no results found
            var err = new Error("Product not found");
            err.status = 404;
            return next(err);
          }
          // if success, then render
          res.render("product_detail", {
            title: results.productcategory,
            product: results.product
          });
        });*/
    Product.aggregate([
        {
            $group: {
                _id: null,
                name: {$addToSet: "$productname"}
                //productinlist: {$addToSet: {a: {id: '$_id', productname: '$productname'}}}
            }
        }
    ]).exec(function (err, list_products) {
        if (err) {
            return next(err);
        }
        //  console.log("list:" + list_products);
        //if success, then render
        /* res.render("product_list", {
             title: "Product List",
             product_list: list_products
         });*/
        res.json({product_list: list_products});
    });
};
exports.type_product_list = function (req, res, next) {
    console.log("my path " + req.params.path);
    Product
        .find( { productname: req.params.path} )
        .exec(function (err, list_products) {
            if (err) {
                return next(err);
            }
            console.log("list: "+list_products);
            res.json({product_list: list_products});
        });
}

// Display detail page for a specific product.
exports.product_detail = function (req, res, next) {

    // console.log("my path " + req.params.path);
    async.parallel(
        {
            product: function (callback) {

                Product.aggregate([
                    {
                        $match:
                            {productname: req.params.path}
                    },
                    {
                        $group:
                            {
                                _id: {productcategory: '$productcategory'},
                                totalStock: {$sum: '$quantity'}
                            }
                    },
                    {
                        $project:
                            {productname: req.params.path, productcategory: '$_id.productcategory', totalStock: 1}
                    }

                ]).exec(callback);
            }
        },
        function (err, results) {
            console.log("results: " + JSON.stringify(results));
            console.log("error: " + err);
            if (err) {
                return next(err);
            }
            if (results.product == null) {
                // no results found
                var err = new Error("Product not found");
                err.status = 404;
                return next(err);
            }
            // if success, then render
            res.render("product_detail", {
                title: results.productcategory,
                product: results.product
            });
        }
    );
};
// Display product create form on GET.
exports.product_create_get = function (req, res, next) {
    //    res.send('NOT IMPLEMENTED: product create GET');
    async.parallel(
        {
            category: function (callback) {
                Category.find(callback);
            }
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            res.render("product_create_form", {
                title: "Create Product",
                category: results.category
            });
        }
    );
};

// Handle product create on POST.
exports.product_create_post = [
    //res.send('NOT IMPLEMENTED: product create POST');
    //convert category to an  array
    (req, res, next) => {
        //console.log(req.body);
        if (!(req.body.category instanceof Array)) {
            if (typeof req.body.category === "undefined") {
                req.body.category = [];
            } else {
                req.body.category = new Array(req.body.category);
            }
        }
        next();
    },
    //validate fields
    body("name", "Title must not be empty.")
        .trim()
        .isLength({min: 1}),
    sanitizeBody("*").escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        var product = new Product({
            name: req.body.name,
            summary: req.body.summary
        });
        if (!errors.isEmpty()) {
            // for there are errors, Render form again with sanitized values/error messages.
            async.parallel(
                {
                    //authors: function(callback){
                    //   Author.find(callback);
                    // },
                    category: function (callback) {
                        Category.find(callback);
                    }
                },
                function (err, results) {
                    if (err) {
                        return next(err);
                    }
                    // Mark our selected genres as checked.
                    for (let i = 0; i < results.category.length; i++) {
                        if (product.category.indexOf(results.category[i]._id) > -1) {
                            results.category[i].checked = "true";
                        }
                    }
                    res.render("product_create_form", {
                        title: "Create Product",
                        category: results.category,
                        product: product,
                        errors: errors.array()
                    });
                }
            );
            return;
        } else {
            // for when data form is valid
            product.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect(product.url);
            });
        }
    }
];
// Display product delete form on GET.
exports.product_delete_get = function (req, res) {
    res.send("NOT IMPLEMENTED: product delete GET");
};

// Handle product delete on POST.
exports.product_delete_post = function (req, res) {
    res.send("NOT IMPLEMENTED: product delete POST");
};
// Display product update form on GET.
exports.product_update_get = function (req, res) {
    res.send("NOT IMPLEMENTED: product update GET");
};

// Handle product update on POST.
exports.product_update_post = function (req, res) {
    res.send("NOT IMPLEMENTED: product update POST");
};
