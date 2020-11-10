const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');


app.engine('ejs', ejsMate);
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/seasons', (req, res) => {
    res.render("seasons");
});

app.get('/gallery', (req, res) => {
    res.render("gallery");
});

app.get('/cast_crew', (req, res) => {
    res.render("cast_crew");
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.get('/register', (req, res) => {
    res.render("register");
});

app.listen(3000, () => {
    console.log(`Server on port 3000`);
});