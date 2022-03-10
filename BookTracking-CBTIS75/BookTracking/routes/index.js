const {Router} = require('express');
var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');//


/* GET home page. */
router.get('/', function(req,res){
  let data = {
    title: 'Ingresar al Sistema',
    layout: false //Indica que no se considere layout.pug
  }
  res.render('login',data);
});

router.get('/home', controller.user_home);

router.get('/register', function(req, res, next){
  let data = {
      title: 'Registrar Usuario',
      layout:false
    }

  res.render('register', data);
});

router.get('/logout', controller.user_logout);

router.post('/verify', controller.user_verify);

router.post('/addUser', controller.user_addUser);

router.get('/a', function(req, res, next) {
  res.redirect('/alumnos');
});
module.exports = router;
