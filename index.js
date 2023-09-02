'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const activiteRoutes = require('./routes/activiteRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();

// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', activiteRoutes.routes);
app.use('/api', authRoutes.routes);



app.listen(config.port, () => {
  console.log('Server listening on url http://localhost:' + config.port )
});