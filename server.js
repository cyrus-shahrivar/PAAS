const express = require('express');
const logger = require('morgan');
const app = express();
const htmlRoutes = require('./controllers/htmlRoutes');
const jsonRoutes = require('./controllers/jsonRoutes');

app.use(express.static('public'));
app.use(logger('dev'));

app.listen(3000, function() {
    console.log("you are broadcasting live on port 3000");
});

app.use('/api', jsonRoutes);
app.use('/', htmlRoutes);
