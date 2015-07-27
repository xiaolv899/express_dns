/**
 * Created by yecl on 15/7/27.
 */
var express = require('express');

var app = express();

var config = {
    'localhost': '',
    '127.0.0.1': '/wap'
};

app.use(require('./lib/dns')(config));

app.use('/', require('./routes/index'));
app.use('/wap', require('./routes/wap'));

app.use(function (err, req, res, next) {

    res.status(err.status || 500);

    res.json(err);
});

app.listen(1337, function () {
    console.log("listening on port %d", 1337);
});

module.exports = app;