module.exports = function(app, passport) {
require('date-utils');
// normal routes ===============================================================
    
	// show the home page (will also have our login links)
	app.get('/', function(req, res) {
		res.render(__dirname + '/views/login.ejs');
	});
    var wkDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
	// PROFILE SECTION =========================
	app.get('/index', isLoggedIn, function(req, res) {
        res.date = new Date();
        var tempday = res.date.getDay();
		res.render(__dirname + '/views/index.ejs', {
			user : req.user,
            date : res.date,
            day  : tempday=wkDays[tempday]
		});
    });

	// LOGOUT ==============================
	app.get('/logout', function(req, res) {
        req.session.destroy();
        req.logout();
        res.clearCookie('connect.sid');
        res.redirect('/');
	});

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

	// locally --------------------------------
		// LOGIN ===============================
		// show the login form
		app.get('/login', function(req, res) {
			res.render(__dirname +'/views/login.ejs', { message: req.flash('loginMessage') });
		});

		// process the login form
		app.post('/login', passport.authenticate('local-login', {
			successRedirect :'/index', // redirect to the secure profile section
			failureRedirect : '/login', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

		// SIGNUP =================================
		// show the signup form
		app.get('/signup', function(req, res) {
			res.render(__dirname +'/views/register/signup.ejs', { message: req.flash('signupMessage') });
		});

        // process the signup form
		app.post('/signup', passport.authenticate('local-signup', {
			successRedirect : '/index', // redirect to the secure profile section
			failureRedirect : '/signup', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

        // SIGNUP =================================
        // show the signup form

         app.get('/admin', function(req, res) {
            res.render(__dirname +'/views/admin/adminlogin.ejs', { message: req.flash('signupMessage') }); 
         });

	

	
// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN ) =============
// =============================================================================

	// locally --------------------------------
		app.get('/connect/local', function(req, res) {
			res.render(__dirname +'/views/connect-local.ejs', { message: req.flash('loginMessage') });
		});
		app.post('/connect/local', passport.authenticate('local-signup', {
			successRedirect : __dirname +'/views/profile', // redirect to the secure profile section
			failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

        app.post('/key', passport.authenticate('local-signup', {
            successRedirect : __dirname +'/views/index', // redirect to the secure profile section
            failureRedirect : '/createkey', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

	
	

	
// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the futureÏ

	// local -----------------------------------
	app.get('/unlink/local', function(req, res) {
		var user            = req.user;
		user.local.email    = undefined;
		user.local.password = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});



};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}
