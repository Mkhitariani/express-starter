/**
 * Create app object and initialize the Express application
 */
var app = require('express')();
/**
 * Create a port in core.js file and call it 
 */
var port = require('./config/core').PORT
/**
 * Set view engine template - EJS 
 */
app.set('view engine', 'ejs');
/**
 * Create middlewave for the routes file
 */
app.use('/',require('./routes/routes'))
/**
 * Create a listen port in the console log
 */
app.listen(port, function() {
	console.log('listen to the 3000 port');
})