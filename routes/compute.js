var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.floor(Math.random()*10)
        y=Math.floor(Math.random()*5);
        let sarvani = Math.atan(x);
        let sarvani2 = Math.exp(x);
        let sarvani3= Math.expm1(y);
        res.send('Math.atan() applied for' +x +'is' +sarvani+'\n Math.exp() applied for' +x +'is' +sarvani2+'\n Math.expm1() applied for number' +y+'is'+sarvani3);
    }
    else{
        x =req.query.x;
        let sarvani = Math.atan(x);
        let sarvani2 = Math.exp(x);
        let sarvani3= Math.expm1(y);
        res.send('Math.atan() applied for' +x +'is' +sarvani+'\n Math.exp() applied for' +x +'is' +sarvani2+'\n Math.expm1() applied for number' +y+'is'+sarvani3);
    }
});

module.exports = router;