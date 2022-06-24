const findByKey = require('~/utils/findByKey');

class CourseController {
	searchByName(req, res) {
		const courses = require('~/data/courses').filter(
			(course) =>
				course.name.toLowerCase().includes(req.params.q.toLowerCase()) ||
				course.key.toLowerCase().includes(req.params.q.toLowerCase())
		);

		res.send(courses);
	}

	getYearList(req, res) {
		res.send([
			{
				year: '2020 - 2021',
				value: '20202021',
				semester: [1, 2, 3],
			},
			{
				year: '2021 - 2022',
				value: '20212022',
				semester: [1, 2, 3],
			},

			{
				year: '2022 - 2023',
				value: '20222023',
				semester: [1, 2, 3],
			},

			{
				year: '2023 - 2024',
				value: '20232024',
				semester: [1, 2, 3],
			},
		]);
	}

	async key(req, res) {
		try {
			const cmbHocKy = parseInt(req.query.n);
			const cmbNamHoc = parseInt(req.query.y.slice(4));
			const txtMaMH = req.params.key;
			const flag = 1;
			const Button = 'Tìm';
			const curPage = '+';
			const txtUserID = '';

			const course = await findByKey({
				cmbHocKy,
				cmbNamHoc,
				txtMaMH,
				curPage,
				flag,
				Button,
				txtUserID,
			});

			res.send(course);
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new CourseController();
