const { Schema, model } = require('mongoose');

const CourseModel = new Schema({
	key: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	weight: { type: Number, default: 1 },
});

module.exports = model('courses', CourseModel);
