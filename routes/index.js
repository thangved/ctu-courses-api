const router = require('express').Router();

router.use('/courses', require('./course'));

module.exports = router;
