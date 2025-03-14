git add app.js
git commit -m "change message"
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('The Matrix!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

