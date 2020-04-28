var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var catalogRouter = require('./routes/catalog');  //Import routes for "catalog" area of site
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Bootstrap css
//import 'bootstrap/dist/css/bootstrap.min.css';

var app = express();

// view engine setup
app.use(express.static(path.join(__dirname, '/public')));
app.use('/static', express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jsx');
var options = { beautify: true};
app.engine('jsx', require('express-react-views').createEngine());

//Set up mongoose connection
//Import the mongoose module
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://pc:pc@cluster0-cclvy.mongodb.net/prod_manager?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// cors
app.use(cors({ origin: true, credentials: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
//app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/catalog', catalogRouter);  // Add catalog routes to middleware chain.
app.use('/users', usersRouter);

module.exports = app;
