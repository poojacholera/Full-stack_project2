#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Product = require('./models/product')
//var Author = require('./models/author')
var ProductCategory = require('./models/productcategory')
var ProductInstance = require('./models/productinstance')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//var authors = []
var categories = []
var products = []
var productinstances = []
/*
function authorCreate(first_name, family_name, d_birth, d_death, cb) {
  authordetail = {first_name:first_name , family_name: family_name }
  if (d_birth != false) authordetail.date_of_birth = d_birth
  if (d_death != false) authordetail.date_of_death = d_death

  var author = new Author(authordetail);

  author.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Author: ' + author);
    authors.push(author)
    cb(null, author)
  }  );
} */

function productCategoryCreate(name, cb) {
  var category = new ProductCategory({ name: name });

  category.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Product Category: ' + category);
    categories.push(category)
    cb(null, category);
  }   );
}

function productCreate(name, summary, productcategory, cb) {
  productdetail = {
    name: name,
    summary: summary,
    productcategory: productcategory
  }
  if (productcategory != false) productdetail.productcategory = productcategory

  var product = new Product(productdetail);
  product.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Product: ' + product);
    products.push(product)
    cb(null, product)
  }  );
}


function productInstanceCreate(product, batch_num, mfg_date, exp_date, status, cb) {
  productinstancedetail = {
    product: product,
    batch_num: batch_num
  }
  if (mfg_date != false) productinstancedetail.mfg_date = mfg_date
  if (exp_date != false) productinstancedetail.exp_date = exp_date
  if (status != false) productinstancedetail.status = status

  var productinstance = new ProductInstance(productinstancedetail);
  productinstance.save(function (err) {
    if (err) {
      console.log('ERROR CREATING ProductInstance: ' + productinstance);
      cb(err, null)
      return
    }
    console.log('New ProductInstance: ' + productinstance);
    productinstances.push(productinstance)
    cb(null, productinstance)
  }  );
}

function createCategory(cb) {
    async.series([
      /*  function(callback) {
          authorCreate('Patrick', 'Rothfuss', '1973-06-06', false, callback);
        },
        function(callback) {
          authorCreate('Ben', 'Bova', '1932-11-8', false, callback);
        },
        function(callback) {
          authorCreate('Isaac', 'Asimov', '1920-01-02', '1992-04-06', callback);
        },
        function(callback) {
          authorCreate('Bob', 'Billings', false, false, callback);
        },
        function(callback) {
          authorCreate('Jim', 'Jones', '1971-12-16', false, callback);
        },*/
        function(callback) {
          productCategoryCreate("Fryums", callback);
        },
        function(callback) {
          productCategoryCreate("Cracker_Bread", callback);
        },
        function(callback) {
          productCategoryCreate("Cheese", callback);
        },
        function(callback) {
          productCategoryCreate("Spicy", callback);
        },
        function(callback) {
          productCategoryCreate("Sweet", callback);
        },
        function(callback) {
          productCategoryCreate("Whole Wheat", callback);
        },
        function(callback) {
          productCategoryCreate("Barley", callback);
        }
        ],
        // optional callback
        cb);
}

function createProducts(cb) {
    async.parallel([
        function(callback) {
          productCreate('Masala Khakhra', 'ajwain flavoured',[categories[1], categories[3], categories[5]], callback);
        },
        function(callback) {
          productCreate('Methi Khakhra', 'Fenugreek flavoured',[categories[1],categories[5]], callback);
        },
        function(callback) {
          productCreate('Jeera Khakhra', 'cumin flavoured',[categories[1],categories[5]], callback);
        },
        function(callback) {
          productCreate('Kothmir-Marcha Khakhra', 'corriander-chilly flavoured',[categories[1],categories[3],categories[5]], callback);
        },
        function(callback) {
          productCreate('Bajri-methi Khakhra', 'Fenugreek flavoured',[categories[1],categories[6]], callback);
        },
        function(callback) {
          productCreate('Chorafali Khakhra', 'gram flavoured',[categories[1],categories[3]], callback);
        },
        function(callback) {
          productCreate('Tomato-Chilly Khakhra', 'Tomato flavoured',[categories[1],categories[5]], callback);
        }
        ],
        // optional callback
        cb);
}

function createProductInstances(cb) {
    async.parallel([
        function(callback) {
          productInstanceCreate(products[4], '01-999', false, false, 'In Stock', callback)
        },
        function(callback) {
          productInstanceCreate(products[6], '05-999', false, false, 'In Stock', callback)
        },
        function(callback) {
          productInstanceCreate(products[1], '31-999', false, false, 'In Production', callback)
        },
        function(callback) {
          productInstanceCreate(products[2], '01-999', false, false, 'Out of Stock (Sold)', callback)
        },
        function(callback) {
          productInstanceCreate(products[3], '10-999', false, false, 'Maintenance', callback)
        }
        ],
        // Optional callback
        cb);
}

async.series([
    createCategory,
    createProducts,
    createProductInstances
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('PRODUCTInstances: '+productinstances);

    }
    // All done, disconnect from database
    mongoose.connection.close();
});
