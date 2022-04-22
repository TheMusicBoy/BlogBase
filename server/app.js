const dir = require('../dir.js');

const express = require('express');
const app = express();

app.use(express.static(dir.static));

app.get('/', (req, res) => {
    res.render(dir.getView('main', {title: 'Main'}));
})

app.use((req, res) => {
    req.render(dir.getView('error'));
})

app.listen(8000, (error) => {
    if(error)
        console.log(error);
    else console.log(`Listening ${8000}~`);
})