const axios = require('axios').default;

const getCookie = async (txtDinhDanh, txtMatKhau) => {
	try {
		const res = await axios.postForm('https://qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php', {
			txtDinhDanh,
			txtMatKhau,
		});

		return res.headers['set-cookie'];
	} catch (error) {
		console.log(error);
	}
};

const loginToCourses = async (txtDinhDanh, cookie) => {
	try {
		await axios.postForm(
			'https://qldt.ctu.edu.vn/htql/dkmh/student/dang_nhap.php',
			{
				txtDinhDanh,
				txtMatKhau: 'p',
			},
			{
				headers: {
					cookie,
				},
			}
		);
	} catch (error) {
		console.log(error);
	}
};

let cookieTemp;

const loginToCtu = async () => {
	try {
		if (cookieTemp) return cookieTemp;

		const txtDinhDanh = process.env.CODE;
		const txtMatKhau = process.env.PASSWORD;

		const cookie = await getCookie(txtDinhDanh, txtMatKhau);
		await loginToCourses(txtDinhDanh, cookie);

		cookieTemp = cookie;

		return cookie;
	} catch (error) {
		console.log(error);
	}
};

module.exports = loginToCtu;
