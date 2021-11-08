//Here we are scoping the routes out for all urls that begin with menus

const express = require('express');

//creates a new instance of a router object
const router = express.Router();

// router.post('/:menu_id/menu_items', async (req, res) => {
//     try {
//         const menu = await Menu.findOne({where: {id: req.params.menu_id}});
//         const menuItem = await MenuItem.create(req.body);
//         await menu.addMenuItem(menuItem);
//         res.redirect(`/menus/${req.params.menu_id}/menu_items`);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// });

// router.get('/:menu_id/menu_items', async (req, res) => {
//     const menu_id = req.params.menu_id;
//     const menuItems = await MenuItem.findAll({where: {Menuid: menu_id}});
//     res.render('menu-item/menu-items-list', { menuItems, menu_id }); 
// });

// router.get('/:menu_id/menu_items/create', async (req, res) => {
//     const menu_id = req.params.menu_id;
//     const menuItems = await MenuItem.findAll({where: {Menuid: menu_id}});
//     res.render('menu-item/create-menu-item', { menuItems, menu_id }); 
// });

// router.delete('/:menu_id/menu_items/:menu_item_id', async (req, res) => {
//     try {
//         await MenuItem.destroy({where: {id: req.params.menu_item_id}});
//         res.status(201).send('deleled menu item with ID ' + req.params.menu_item_id);
//     } catch(e) {
//         res.status(400).send(e.message);
//     };
// });


module.exports = router;