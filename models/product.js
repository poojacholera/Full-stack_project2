var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    summary: {type: String, max: 100},
    productcategory: [{type: Schema.Types.ObjectId, ref: 'ProductCategory'}],
  }
);
// Virtual for product's URL
ProductSchema
.virtual('url')
.get(function () {
  return '/catalog/product/' + this._id;
});

//Export model
module.exports = mongoose.model('Product', ProductSchema);
