import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { PORT, PORT_FE, NODE_ENV } = process.env;
const port = PORT || 4000;
const port_fe = PORT_FE || port + 1;
const app = express();

// API
app.get('/health', function (req, res) {
	res.json({ message: 'OK' });
});

// Serve the FE
if (NODE_ENV === 'production') {
	app.use(express.static('public'));

	app.get('*', function (req, res) {
		res.status(404).send('404 Not Found');
	});
}

// Embedding FE on Development
else {
	// set the view engine to ejs
	app.set('view engine', 'ejs');

	// serve the root page
	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('*', function (req, res) {
		if (
			req.originalUrl.includes('/media') ||
			req.originalUrl.includes('/static')
		) {
			res.redirect(`http://localhost:${port_fe}${req.originalUrl}`);
		} else {
			res.status(404).send('404 Not Found');
		}
	});
}

app.listen(port, () => console.log(`app is listening on port ${port}`));
