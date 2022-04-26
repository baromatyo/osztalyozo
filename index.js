const port = 3000;
const express = require('express');

const app = express();

app.set = ('view engine', 'ejs');
app.use(express.static('static/index.html'));