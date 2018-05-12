// *********************************************************************************
// Routes for sending users to various html pages
// *********************************************************************************

// Routes
// =============================================================
module.exports = function(app) {
  app.get('/overviews', function(req, res) {
    res.render("overviews");
  })

  app.get('/', function(req, res) {
    res.render("login");
   //res.render('index')
  })

  app.get('/register', function(req, res) {
    res.render("registration");
  })

  app.get('/index', function(req, res) {
   res.render('index')
  })

  app.get('/accounts', function(req, res) {
    res.render('accounts')
   })

  app.get('/bills', function(req, res) {
    res.render('bills')
  })

  app.get('/transactions', function(req, res) {
    res.render('transactions')
  })

  app.get('/trends', function(req, res) {
    res.render('trends')
  })

  app.get('/profile', function(req, res) {
    res.render('profile')
  })  
}