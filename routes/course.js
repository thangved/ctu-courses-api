const router = require('express').Router();
const CourseController = require('~/controllers/CourseController');

router.get('/search/:q', CourseController.searchByName);
router.get('/yearlist', CourseController.getYearList);
router.get('/key/:key', CourseController.key);
router.post('/request-add-course', CourseController.requestAddCourse);

module.exports = router;
