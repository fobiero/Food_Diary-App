const express = require('express');
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/user.html'));
})

const port = 5000;
app.listen(port, () => console.log(`listening on port ${port}`));