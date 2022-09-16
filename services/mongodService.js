const { connect } = require('mongoose');
const CourseModel = require('~/models/CourseModel');

const mongodService = async () => {
	try {
		const db = await connect(process.env.MONGO_DB_CONNECT_STRING);
		const countCourses = await CourseModel.count();
		if (countCourses === 0) {
			const coursesData = require('~/data/courses');

			const createQueue = [];

			console.log(`Ctu Courses: Begin create`);

			coursesData.map((course) => {
				createQueue.push(CourseModel.create(course));
				console.log(`Ctu Courses: Created Course: ${course.key} - ${course.name}`);
			});

			await Promise.all(createQueue);

			console.log(`Ctu Courses: Created!!!`);
		}
		return db;
	} catch (error) {
		console.log(error);
	}
};

module.exports = mongodService;
