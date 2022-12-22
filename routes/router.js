const router = require('express').Router();
const weather = require('../controllers/weather');

router.get('/', function (res) {
    // res.render('home');
    return res.status(200).json({status:200,message:'enygma weathers' });
});

router.get("/create/:tgl", weather.index);


module.exports = router;