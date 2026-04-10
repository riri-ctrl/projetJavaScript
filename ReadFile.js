const fs = require('fs');

const data = fs.readFileSync('lacomediehumaine_.txt', 'utf8');

module.exports = data;