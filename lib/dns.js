/**
 * Created by yecl on 15/7/27.
 */
var url = require('url');

/**
 * 实现域名dns解析网站不同目录功能
 * @param req
 * @param res
 * @param next
 */
module.exports = function(opt) {
    return function (req, res, next) {
        if (opt && opt[req.hostname]) {
            if (req.url.toLowerCase().indexOf(opt[req.hostname].toLowerCase()) != 0)
                req.url = opt[req.hostname] + req.url;
        }
        next();
    };
};