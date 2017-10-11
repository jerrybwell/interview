/* eslint consistent-return:0 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const api = require('./api');
var cors = require('cors');

app.use(cors())
app.use('/api', api);
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('./build'));

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server starts on ${host}:${port}`);
});

