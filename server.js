var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function (req, res) {
    var source = req.useragent.source
    var software = source.substring(source.indexOf("(") + 1, source.indexOf(")"))
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var lang = req.headers["accept-language"]
    var language = lang.substring(0, lang.indexOf(","))
    res.send(JSON.stringify({"ipadress": ip , "language": language, "software": software}));
    //console.log(req.useragent, req.ip, req.headers)
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
