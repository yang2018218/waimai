var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const shops = require('./jsons/shops.json');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/restaurants', function(req, res){
	// console.log( shops);
    let limit = req.query.limit || 8;
    let offset = req.query.offset || 0;
    let datas = shops.items;
    console.log( datas.length );
    var arrs = [];
    var obj = {
        "has_next": true,
        "meta": {
            "rank_id": "f827caa09a574438ad8cb30cc4eb7d58"
        }
	};
    for( var i = 0; i < datas.length; i++ ){

    	if( i  >= offset && arrs.length < 8){
            // console.log(i);
    		arrs.push( datas[i] )
		}

		if( arrs.length == 8 ){
			console.log('数量够了')

            obj.items = arrs;
            res.json({
                error:0,
                data:obj
            })
            break;
		}

	}

})





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




app.listen(2222, function(){
  console.log('1212 is running...')
})

module.exports = app;
