const router = require('express').Router();
const weather = require('../controllers/weather');


router.get("/generatebmkgjs/", weather.index);
router.get("/", weather.base);


module.exports = router;