const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const router = require('./app/router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));


// const session = require('express-session');
// app.use(session(
// 	{
// 		secret: process.env.SESSION_SECRET,
// 		resave: true,
// 		saveUninitialized: true
// 	}
// ));


app.use(router);







app.listen(PORT, () => {
	console.log(`Server listening on port : ${PORT}`);
});
