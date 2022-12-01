const express = require('express');
const app = express();


app.get('/buy', (req, res) => res.send("Buy"));
app.get("/rent", (req, res)=> res.send("Rent"));
app.get('/about', (req, res) => res.send("About"));
app.get('/contact', (req, res) => res.send("Contact"));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
