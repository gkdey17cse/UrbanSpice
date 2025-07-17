const express = require('express');
const path = require('path');
// Other module Imports
const about = require('./public/js/about');
const menuIndex = require('./public/js/menuIndex');
const testimonials = require('./public/js/testimonials')
const menuHero = require('./public/js/menuHero')
const menuAll = require('./public/js/menuComplete')
const chefDetails = require('./public/js/chefsDetails')
const faqs = require('./public/js/faqs')


const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { about: about, menu: menuIndex, testimonials: testimonials });
});

app.get('/about', (req, res) => {
    res.render('about', { about: about, chefs: chefDetails });
});

app.get('/menu', (req, res) => {
    res.render('menu', { menus: menuHero, mealTypes: Object.keys(menuAll), menuData: menuAll });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/ordernow', (req, res) => {
    res.render('ordernow', { menus: menuAll });
});

app.get('/bookatable', (req, res) => {
    res.render('booktable');
});

app.get('/faqs', (req, res) => {
    res.render('faqs', { faqs: faqs });
});

app.get('/testimonials', (req, res) => {
    res.render('testimonials');
});

app.get('/pnf', (req, res) => {
    res.render('pagenotfound');
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('pagenotfound');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
