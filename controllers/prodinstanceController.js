var ProductInstance = require('../models/productinstance');

// Display list of all ProductInstance.
exports.productinstance_list = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: ProductInstance list');
    ProductInstance.find()
      .populate('product')
      .exec(function(err, list_productinstances){
        if(err){return next(err);}
        //success, so render
        res.render('productinstance_list',{title:'Product Instance List', productinstance_list: list_productinstances});
      });
};

// Display detail page for a specific ProductInstance.
exports.productinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: ProductInstance detail: ' + req.params.id);
};
// Display ProductInstance create form on GET.
exports.productinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ProductInstance create GET');
};
// Handle BookInstance create on POST.
exports.productinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ProductInstance create POST');
};
// Display ProductInstance delete form on GET.
exports.productinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ProductInstance delete GET');
};

// Handle ProductInstance delete on POST.
exports.productinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ProductInstance delete POST');
};
// Display ProductInstance update form on GET.
exports.productinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ProductInstance update GET');
};

// Handle Productinstance update on POST.
exports.productinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ProductInstance update POST');
};
