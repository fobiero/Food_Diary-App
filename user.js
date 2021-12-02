const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/user.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './static/register.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, './static/dashboard.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));