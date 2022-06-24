const axios = require('axios').default;

const loginToCtu = async () => {
	try {
		const txtDinhDanh = process.env.CODE;
		const txtMatKhau = process.env.PASSWORD;
		const res = await axios.postForm('https://qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php', {
			txtDinhDanh,
			txtMatKhau,
		});

		return res.headers['set-cookie'];
	} catch (error) {
		console.log(error);
	}
};

module.exports = loginToCtu;
