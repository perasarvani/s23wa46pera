var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.floor(Math.random()*10)
        y=Math.floor(Math.random()*5);
        let result = Math.atan(x);
        let result2 = Math.exp(x);
        let result3= Math.expm1(y);
        res.send('Math.atan() applied for' +x +'is' +result+'\n Math.exp() applied for' +x +'is' +result2+'\n Math.expm1() applied for number' +y+'is'+result3);
    }
    else{
        x =req.query.x;
        let result = Math.atan(x);
        let result2 = Math.exp(x);
        let result3= Math.expm1(y);
        res.send('Math.atan() applied for' +x +'is' +result+'\n Math.exp() applied for' +x +'is' +result2+'\n Math.expm1() applied for number' +y+'is'+result3);
    }
});

module.exports = router;