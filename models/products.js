var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var ProductSchema = new Schema(
  {
    productcategory:{type: String, required: true, max: 100},
    productname: {type: String, required: true, max: 100},
    batchnumber:{type: String, required: true, max: 100},
    mfgdate:{type: Date, default: Date.now},
    expdate:{type: Date, default: Date.now},
    quantity:{type: String, required: true, max: 100},
    summary: {type: String, max: 100},
    //productcategory: [{type: Schema.Types.ObjectId, ref: 'productcategory'}],
  }
);
// Virtual for product's URL
ProductSchema
.virtual('url')
.get(function () {
  return '/catalog/product/' + this._id;
});
ProductSchema
.virtual('mfg_date_formatted')
.get(function () {
  return moment(this.mfgdate).format('MMM D, YYYY');
});
ProductSchema
.virtual('exp_date_formatted')
.get(function () {
  return moment(this.expdate).format('MMM D, YYYY');
});

//Export model
module.exports = mongoose.model('products', ProductSchema);
