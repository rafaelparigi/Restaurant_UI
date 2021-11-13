//Here we are scoping the routes out for all urls that begin with restaurants
const { json } = require('express');
const express = require('express');

//creates a new instance of a router object
const router = express.Router();

const fetch = require('node-fetch');
const config = require('../config');
const url = `${config.url.restaurants}`; //'http://localhost:3002/api/restaurants'

router.post('/', async (req, res, next) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: { 'Content-type': 'application/json'}
        });
        console.log(JSON.stringify(req.body));
        res.redirect('/restaurants');
    } catch(error) {
        return next(error);
    }
});

// this route returns HTML for all the restaurants
router.get('/', async (req, res, next) => {
    try {
        const response = await fetch(url);
        const restaurants = await response.json();
        console.log(JSON.stringify(restaurants));
        res.render('restaurant/restaurant-list', { restaurants });
    } catch (error) {
        return next(error);
    };
});

//renders form for new restaurant
router.get('/create', async (req, res) => {
    res.render('restaurant/create-restaurant');
});

// //this route returns HTML to update a restaurant
// router.get('/:id/update', async (req, res) => {
//     const restaurant = await Restaurant.findOne({where: {id: req.params.id}});
//     res.render('restaurant/update-restaurant', { restaurant });
// });

// router.put('/:id', async (req, res) => {
//     try {
//         const restaurantId = req.params.id;
//         await Restaurant.update({name: req.body.name, imagelink: req.body.imagelink}, {where: {id: restaurantId}});
//         res.render('restaurant/restaurant-list');
//     } catch(e) {
//         res.status(400).send(e.message);
//     };
// });

router.post('/:restaurant_id/menus', async (req, res, next) => {
    try {
        const resto_id = req.params.restaurant_id;
        const response = await fetch(`${url}/${resto_id}/menus`, {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: { 'Content-type': 'application/json' }
        });
        res.redirect(`/restaurants/${resto_id}/menus`);
    } catch(error) {
        return next(error);
    }
});

router.get('/:id/menus', async (req, res, next) => {
    try {
        const resto_id = req.params.id;
        const response = await fetch(`${url}/${resto_id}/menus`);
        const menus = await response.json();
        res.render('menu/menu-list', { resto_id, menus });
    } catch (error) {
        return next(error);
    };
});

router.get('/:id/menus/create', async (req, res) => {
    const resto_id = req.params.id;
    res.render('menu/create-menu', { resto_id });
});

module.exports = router;