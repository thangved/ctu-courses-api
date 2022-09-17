const CourseModel = require('~/models/CourseModel');
const findByKey = require('~/utils/findByKey');

class CourseController {
	async searchByName(req, res) {
		const courses = await CourseModel.find({
			$or: [
				{
					name: new RegExp(req.params.q, 'i'),
				},
				{
					key: new RegExp(req.params.q, 'i'),
				},
			],
		});
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

			const course = await findByKey({
				cmbHocKy,
				cmbNamHoc,
				txtMaMH,
			});

			res.send(course || []);
		} catch (error) {
			console.log(error);
		}
	}

	async requestAddCourse(req, res) {
		try {
			const { key } = req.body;

			const cmbNamHoc = new Date().getFullYear();
			const cmbHocKy = 1;
			const txtMaMH = key;

			const isExisting = await CourseModel.findOne({ key: new RegExp(key, 'i') });

			if (!!isExisting) {
				return res.status(404).send({
					success: false,
					message: 'Học phần đã tồn tại trong hệ thống',
				});
			}

			const courses = [
				...(await findByKey({ cmbHocKy, cmbNamHoc, txtMaMH })),
				...(await findByKey({ cmbHocKy, cmbNamHoc: cmbNamHoc + 1, txtMaMH })),
			];

			if (!courses?.length) {
				return res.status(404).send({
					success: false,
					message:
						'Chúng tôi không tìm thấy học phần này trên hệ thống của trường Đại học Cần Thơ',
				});
			}

			const course = courses[0];

			await CourseModel.create(course);

			res.send({
				success: true,
				message: `Yêu cầu thêm học phần "${course.name}" thành công`,
			});
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new CourseController();
