const fs = require('fs');

let data = { randomId: Math.floor(Math.random() * (10000 - 20 + 1) + 20)}
fs.writeFileSync('data.json', JSON.stringify(data));
