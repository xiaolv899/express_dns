/**
 * Created by yecl on 15/7/27.
 */
var express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {

    res.status(200).send('Home');

});


module.exports = router;