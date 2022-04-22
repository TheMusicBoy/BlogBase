const dir = require('../dir.js');

const express = require('express');
const app = express();

app.use(express.static(dir.static));

app.get('/', (req, res) => {
    let title = 'Main';
    res.render(dir.getView('main'), {title: title});
})

app.get('/topics', (req, res) => {
    let title = 'Topics';
    res.render(dir.getView('topics', {title: title}));
})

app.use((req, res) => {
    res.render(dir.getView('error', {title: title}));
})


app.listen(8000, (error) => {
    if(error)
        console.log(error);
    else console.log(`Listening ${8000}~`);
})