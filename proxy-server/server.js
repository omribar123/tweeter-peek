const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

const routes = require('./api/routes/routes');

routes(app);
app.listen(port);

console.log(`twitter-peek proxy server started on: ${port}`);
