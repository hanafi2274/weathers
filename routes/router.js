const router = require('express').Router();
const weather = require('../controllers/weather');

router.get('/', function (req, res) {
    res.render('home');
});

router.get("/weather/create/:tgl", weather.index);


module.exports = router;