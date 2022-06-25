const axios = require('axios').default;

const convertHTML = require('./convertHTML');
const loginToCtu = require('./loginToCtu');

const findByKey = async (payload) => {
	try {
		const cookie = await loginToCtu();

		const res = await axios.postForm(
			'https://qldt.ctu.edu.vn/htql/dkmh/student/index.php?action=dmuc_mhoc_hky',
			payload,
			{
				headers: {
					cookie,
				},
			}
		);

		return convertHTML(res.data);
	} catch (error) {}
};

module.exports = findByKey;
