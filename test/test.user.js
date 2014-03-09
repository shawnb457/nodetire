var should = require("should");
var mongoose = require('mongoose');
var User = require("../app/models/user.js");
var db;

describe('User', function() {

before(function(done) {
 db = mongoose.connect('mongodb://JakeBrink:MagsBrink@troup.mongohq.com:10089/app22718780');
   done();
 });

 after(function(done) {
   mongoose.connection.close()
   done();
 });

 beforeEach(function(done) {
  var user = new User({
    local.email: '12345',
    local.password: 'testy'
  });

  user.save(function(error) {
    if (error) console.log('error' + error.message);
    else console.log('no error');
    done();
   });
 });

 it('find a user by username', function(done) {
    User.findOne({ local.email: '12345' }, function(err, account) {
      user.email.should.eql('12345');
      
      done();
    });
 });

 afterEach(function(done) {
    User.remove({}, function() {
      done();
    });
 });

});