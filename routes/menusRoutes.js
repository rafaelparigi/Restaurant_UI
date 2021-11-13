//Here we are scoping the routes out for all urls that begin with menus

const express = require('express');

//creates a new instance of a router object
const router = express.Router();

const fetch = require('node-fetch');
const config = require('../config');
const url = `${config.url.menus}`; //'http://localhost:3002/api/menus'

router.post('/:menu_id/menu_items', async (req, res, next) => {
    try {
        const menu_id = req.params.menu_id
        const response = await fetch(`${url}/${menu_id}/menu_items`, {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: { 'Content-Type': 'application/json' }
        });
        res.redirect(`/menus/${menu_id}/menu_items`);
    } catch(error) {
        return next(error);
    };
});

router.get('/:menu_id/menu_items', async (req, res, next) => {
    try {
        const menu_id = req.params.menu_id;
        const response = await fetch(`${url}/${menu_id}/menu_items`);
        const menuItems = await response.json();
        res.render('menu-item/menu-items-list', { menuItems, menu_id });
    } catch (error) {
        return next(error);
    };
});

router.get('/:menu_id/menu_items/create', async (req, res) => {
    const menu_id = req.params.menu_id;
    res.render('menu-item/create-menu-item', { menu_id }); 
});

// router.delete('/:menu_id/menu_items/:menu_item_id', async (req, res) => {
//     try {
//         await MenuItem.destroy({where: {id: req.params.menu_item_id}});
//         res.status(201).send('deleled menu item with ID ' + req.params.menu_item_id);
//     } catch(e) {
//         res.status(400).send(e.message);
//     };
// });


module.exports = router;