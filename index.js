const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');


app.engine('ejs', ejsMate);
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.get('/', (req, res) => {
    console.log('hello')
    res.render("index");
});

app.listen(3000, () => {
    console.log(`Server on port 3000`);
})