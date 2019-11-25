var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductCategorySchema = new Schema(
  {
      name: {type: String, required: true, min: 3, max: 100}
  }
);

// Virtual for bookinstance's URL
ProductCategorySchema
.virtual('url')
.get(function () {
  return '/catalog/productcategory/' + this._id;
});

//Export model
module.exports = mongoose.model('ProductCategory', ProductCategorySchema);
