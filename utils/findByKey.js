const axios = require('axios').default;

const convertHTML = require('./convertHTML');

const findByKey = async (payload) => {
	try {
		const res = await axios.postForm(
			'https://qldt.ctu.edu.vn/htql/dkmh/student/index.php?action=dmuc_mhoc_hky',
			payload,
			{
				headers: {
					cookie: `ZDEDebuggerPresent=php,phtml,php3; PHPSESSID=${process.env.PHPSESSID}`,
				},
			}
		);

		return convertHTML(res.data);
	} catch (error) {}
};

module.exports = findByKey;
