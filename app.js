const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('env2')('./config.env');
const Property = require('./models/Property');

mongoose.connect(process.env.MONGO_URL);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/propertyRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('app listening at ', port);
});
