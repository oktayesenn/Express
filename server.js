const express = require('express');
const app = express();


app.get('/api', (req, res) => res.send("Buy, Rent"));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
