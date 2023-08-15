// if (process.env.NODE_ENV != "production") {
//     require("dotenv").config();
// }




// //importing lib
// const flash = require('express-flash');
// const session = require('express-session');
// const passport = require('passport');
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const initializePassport = require('./passport_config');
// const methodOverride = require('method-override');

// const users = [];

// initializePassport(
//     passport, 
//     email => users.find(user => user.email == email),
//     id => users.find(user => user.id == id)
// );


// app.set('view engine', 'ejs');
// app.use(express.urlencoded({extended: false}));
// app.use(flash());
// app.use(session({ 
//     secret: process.env.SESSION_SECRET, 
//     resave: false, 
//     saveUninitialized: false
//  }));

// //app.use(methodOverride('_method'));
// app.use(passport.initialize());
// app.use(passport.session());




// app.post('/register', async (req,res) => {
//     try {
//         const harshedPassword = await bcrypt.hash(req.body.password,10)
//         users.push({
//             id: Date.now().toString(),
//             name: req.body.name,
//             email: req.body.email,
//             password: harshedPassword,
//         })
//         console.log(users);// displays users in the console 
//         res.redirect('/login')
//     } catch (error) {
//         console.error(error)
//         res.redirect('/register')
        
//     }
// });


// app.post('/login', passport.authenticate('local',{
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true

// }))



// // Routes
// app.get('/',checkAuthenticated,(req, res) => {
//     res.render('index.ejs', {name: req.user.name});
// });

// app.get('/login',(req, res) => {
//     res.render('login.ejs');
// });

// app.get('/register',(req, res) => {
//     res.render('register.ejs');
// });

// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) { 
//         return next();
// }

// res.redirect('/login')
// }

// //other




// app.use(session({
//     name: 'sessionId',
//     secret: 'bsdkjbkjbug38693hxby32732672c63b692938c6yb9692929y69224ybu42y934762', // Use a strong, random secret key
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false, // Set this to true if using HTTPS
//         httpOnly: true,
//         maxAge: 3600000, // Set the desired session expiration time
        
//     }
// }));

// // Rest of your server code

// // Rest of your server code





// //End Routes

// app.listen(3000)
// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }

// const flash = require('express-flash');
// const session = require('express-session');
// const passport = require('passport');
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const initializePassport = require('./passport_config');
// const methodOverride = require('method-override');

// const users = [];

// initializePassport(
//     passport, 
//     email => users.find(user => user.email == email),
//     id => users.find(user => user.id == id)
// );

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));
// app.use(flash());
// app.use(session({ 
//     secret: process.env.SESSION_SECRET, 
//     resave: false, 
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.post('/register', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         users.push({
//             id: Date.now().toString(),
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword,
//         });
//         console.log(users);
//         res.redirect('/login');
//     } catch (error) {
//         console.error(error);
//         res.redirect('/register');
//     }
// });

// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// }));

// app.get('/', checkAuthenticated, (req, res) => {
//     res.render('index.ejs', { name: req.user.name });
// });

// app.get('/login', (req, res) => {
//     res.render('login.ejs');
// });

// app.get('/register', (req, res) => {
//     res.render('register.ejs');
// });

// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }

// app.listen(3000);


if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const initializePassport = require('./passport_config');
const methodOverride = require('method-override');

const users = [];

initializePassport(
    passport, 
    email => users.find(user => user.email == email),
    id => users.find(user => user.id == id)
);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        console.log(users);
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.redirect('/register');
    }
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name });
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.listen(3000);




