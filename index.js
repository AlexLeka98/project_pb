const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local');
// const catchAsync = require('./utils/catchAsync');
const { isLoggedIn } = require('./middleware');
const User = require('./models/user');

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/peakydb";
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
//Check if there is an error when connecting with the database
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


app.engine('ejs', ejsMate);
app.set("view engine", "ejs");


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));




//Configuring Session
const sessionConfig = {
    secret: 'thisisasecretsdad',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //Expire after a week. A week in miliseconds
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/fakeuser', async (req, res) => {
    const user = new User({ email: 'alexxx@gmail.com', username: 'Alekos' });
    const newUser = await User.register(user, 'chicken');
    res.send(newUser);
})



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

app.get('/register', (req, res) => {
    res.render("register");
});

app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        await User.register(user, password);
        // req.flash('error', 'You are now a peaky blinder.');
        req.redirect('/');
    }
    catch (e) {
        // req.flash('error', e.message);
        res.redirect('/');
    }
});


app.get('/login', (req, res) => {
    res.render("login");
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), async (req, res) => {
    console.log(req.body);
    res.send('You succesfully logged in');
})

app.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    console.log('You are now logged out!');
    res.redirect('/');
})


app.listen(3000, () => {
    console.log(`Server on port 3000`);
});