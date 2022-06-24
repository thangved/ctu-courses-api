require('module-alias/register');
require('dotenv').config();

const express = require('express');

const app = express();

app.use(
	require('cors')({
		origin: '*',
		optionsSuccessStatus: 200,
	})
);

app.use('/', require('~/routes'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Project run in http://localhost:${PORT}`);
});
