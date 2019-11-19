const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

// app.get('/api/people', (req, res, next) => {

// });

// app.get('/api/places', (req, res, next) => {

// });

// app.get('/api/things', (req, res, next) => {

// });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});