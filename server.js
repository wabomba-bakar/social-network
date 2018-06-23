const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 5000,
    app = express();

const users = require('./routes/api/users'),
    posts = require('./routes/api/posts'),
    profile = require('./routes/api/profile');

app.get('/', (req, res) => {
    res.send('Hallo');
});


//DB config
const db = require('./config/keys').mongoURI;


// connect to mongodb
mongoose.connect(db)
    .then(() => console.log('connected to mongoDB...'))
    .catch(err => console.log(err));

app.use('/api/posts', posts);
app.use('/api/users', users);
app.use('/api/profile', profile);

app.listen(port, () => {
    console.log(`server started on port:${port}...`);
});