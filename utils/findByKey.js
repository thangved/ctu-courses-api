const axios = require('axios').default;

const convertHTML = require('./convertHTML');
const loginToCtu = require('./loginToCtu');

const findByKey = async ({
	cmbHocKy,
	cmbNamHoc,
	txtMaMH,
	flag = 1,
	Button = 'Tìm',
	curPage = '+',
	txtUserID = '',
}) => {
	try {
		const cookie = await loginToCtu();

		const res = await axios.postForm(
			'https://qldt.ctu.edu.vn/htql/dkmh/student/index.php?action=dmuc_mhoc_hky',
			{ cmbHocKy, cmbNamHoc, txtMaMH, flag, Button, curPage, txtUserID },
			{
				headers: {
					cookie,
				},
			}
		);

		return convertHTML(res.data);
	} catch (error) {
		console.log(error);
	}
};

module.exports = findByKey;
