const fs = require('fs');
const path = require('path');

const root = __dirname;

module.exports = {
    getServer: (dir) => path.join(root, 'server', `${dir}`),
    static: path.join(root, 'static'),
    getView: (page) => path.join(root, 'static', 'views', `${page}.ejs`)
}