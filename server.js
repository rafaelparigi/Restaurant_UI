//express setup
const express = require('express');
const app = express(); //app that handles http requests
const port = 8001;

const cors = require('cors');
app.use(cors());

//handlebars setup
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});

app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

//express.static is a piece of middleware (code which runs on the server between getting a request and sending a response) that makes 
//everything inside the folder used as an argument (public folder here) available/public as a static file to the frontend/browser. 
//Whenever we want to use the files inside the public folder, we just need to specify a path relative to the public folder.

// serve static assets from the public/ folder
app.use(express.static('public'));

//middleware that takes all the url encoded data and passes it into an object that we can use on the request object. Allow us to use req.body or the variables sent in the url.
// support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Express server running on port ${port}`));

//UI
const restaurantsRoutes = require('./routes/restaurantsRoutes');
// /restaurants will apply to the start of every path/url inside restaurantsRoutes
app.use('/restaurants', restaurantsRoutes);

const menusRoutes = require('./routes/menusRoutes');
// /menus will apply to the start of every path/url inside menusRoutes
app.use('/menus', menusRoutes);

// serve an index page
app.get('/', (req, res) => {
    res.render('index');
});
