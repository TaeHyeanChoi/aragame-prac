/* node or npm modules */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

/* local modules */
const config = require('./config');
const models = require('./models/user')

// DB connection
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to MongoDB server');
});
mongoose.connect(config.mongodUri);
User = mongoose.model("User");

// var user = new User({
// 	username: "user300",
// 	password: "password",
// 	bestscore: 300,
// 	numberofplays: 10,
// 	dateofbestscore: new Date()
// });

// user.save((err, model) => {
//   if (err) throw err;

//   console.log("My new User is saved");
// });


/* express object */
const app = express();

/* middleware */
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

// print the request log on console
app.use(morgan('dev'));

// set the secret key variable for JWT
app.set('jwt-secret', config.secret)


app.get('/', (req, res) => {
    res.send("Hello JWT")
})

// configure api router
app.use('/api', require('./api'))

// save score
app.post('/save', (req, res) => {
	console.log(req)
	// let query = { 'username' : req.user.username};

	// User.findOneAndUpdate()
})


// send top scores
app.get('/highscores/:scope', (req, res) => {
	if (req.params.scope === 'week') {
		var oneWeekAgo = new Date()
    	oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

		User.find()
			.where('dateofbestscore').gt(oneWeekAgo)
			.limit(5)
			.sort({'bestscore': -1})
			.exec((err, entries) => {
				if (err) {
					console.log(err)
					return res.status(400).send('No users')
				}

				console.log(entries)
				return res.send(entries)
			})
	} 

	else if (req.params.scope === 'all') {
		User.find()
			.limit(5)
			.sort({'bestscore': -1})
			.exec((err, entries) => {
				if (err) {
					console.log(err)
					return res.status(400).send('No users')
				}

				console.log(entries)
				return res.send(entries)
			})
	}

	else {
		res.status(400).send('Oops!');

	}
	
})


/* For frontend scripts */
app.get('/tetris.js', (req, res) => {
    fs.readFile('./tetris.js', (err, data) => {
        res.write(data);
        res.end();
    })
})

const server = app.listen(9000, () => {
    console.log('Server is running at port 9000')
})