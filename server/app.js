const dir = require('../dir.js');

const express = require('express');
const app = express();

app.use(express.static(dir.static));

app.get('/', (req, res) => {
    let title = 'Main';
    res.render(dir.getView('main'), {title: title});
})

app.listen(8000, (error) => {
    if(error)
        console.log(error);
    else console.log(`Listening ${8000}~`);
})