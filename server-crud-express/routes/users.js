var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Lista de usuarios');
});

router.get('/:numero', function(req, res, next) {
  res.send(`Usuário número ${req.params['numero']}`);
});


module.exports = router;
