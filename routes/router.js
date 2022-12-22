const router = require('express').Router();
const weather = require('../controllers/weather');


router.get("/create/:tgl", weather.index);
router.get("/", weather.base);


module.exports = router;