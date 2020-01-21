const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});