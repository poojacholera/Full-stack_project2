var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductInstanceSchema = new Schema(
  {
    product: {type: Schema.Types.ObjectId, ref: 'Product', required: true },
    batch_num: {type: String, required: true},
    mfg_date: {type: Date, default: Date.now},
    exp_date: {type: Date, default: Date.now},
    status: {type: String, required: true, enum: ['In Stock', 'In Production', 'Out of Stock (Sold)', 'Maintenance'], default: 'Maintenance'}
  }
);
// Virtual for ProductInstance's URL
ProductInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/productinstance/' + this._id;
});
//Export model
module.exports = mongoose.model('ProductInstance', ProductInstanceSchema);
