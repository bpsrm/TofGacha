const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('layout', { body: 'index' });
});

app.get('/simulacrum', (req, res) => {
    res.render('layout', { body: 'simulacrum' });
});

app.get('/event', (req, res) => {
    res.render('layout', { body: 'event' });
});

app.get('/loading', (req, res) => {
    res.render('loading');
});

const port = process.env.port || 80;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});