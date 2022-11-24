const { JSDOM } = require('jsdom');
const courses = require('~/data/courses');

const convertHTML = (data) => {
	try {
		const {
			window: { document },
		} = new JSDOM(data);

		const table = document.querySelectorAll('table')[5];

		const weight = document.body.innerHTML.split('Tín chỉ : ')[1]?.split(' TC')[0];

		const name = document.querySelectorAll('td')[12].innerHTML.split(': ')[1].split('\t')[0];

		const key = document.querySelectorAll('td')[11].innerHTML.split(': ')[1].split('\t')[0];

		const tbody = table.querySelector('tbody');
		const trs = tbody.querySelectorAll('tr');

		const __classes = [];

		trs.forEach((tr, index) => {
			if (index === 0) return;

			const tds = tr.querySelectorAll('td');

			__classes.push({
				key,
				class: tds[9].innerHTML.replace(/&.+;/g, ''),
				week: tds[8].innerHTML.replace(/&.+;/g, ''),
				id: tds[1].innerHTML.replace(/&.+;/g, ''),
				member: parseInt(tds[6].innerHTML.replace(/&.+;/g, '')),
				available: parseInt(tds[7].innerHTML.replace(/&.+;/g, '')),
				name,
				weight: courses.find((course) => course.key === key)?.weight || weight,
				time: [
					{
						start: parseInt(tds[3].innerHTML.replace(/&.+;/g, '')),
						count: parseInt(tds[4].innerHTML.replace(/&.+;/g, '')),
						day: parseInt(tds[2].innerHTML.replace(/&.+;/g, '')),
						room: tds[5].innerHTML.replace(/&.+;/g, ''),
					},
				],
			});
		});

		let classes = [];

		__classes.forEach((cl) => {
			if (classes.find((c) => c.id === cl.id)) {
				classes = classes.map((c) => {
					if (c.id !== cl.id) return c;

					return {
						...c,
						time: [...c.time, ...cl.time],
					};
				});
				return;
			}

			classes.push(cl);
		});

		return classes;
	} catch (error) {
		return [];
	}
};

module.exports = convertHTML;
