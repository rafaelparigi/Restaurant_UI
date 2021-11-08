async function deleteRestaurant(id) {
    /*The global fetch() method starts the process of fetching a resource from the network, 
    returning a promise which is fulfilled once the response is available.
    */
    const response = await fetch(`/restaurants/${id}`, { method: 'DELETE' }).then(() => document.getElementById(`article-${id}`).remove());
    numOfRestaurants -= 1;
    document.getElementById('numOfRestos').innerHTML = `There are ${numOfRestaurants} restaurants`;
};

async function deleteMenu(restoId, menuId) {
    await fetch(`/restaurants/${restoId}/menus/${menuId}`, { method: 'DELETE' }).then(() => document.getElementById(`article-${menuId}`).remove()).then(() => {
        numOfMenus -= 1
        document.getElementById('numOfMenus').innerHTML = `There are ${numOfMenus} menus.`
    });
};

async function deleteMenuItem (MenuId, id) {
    await fetch(`/menus/${MenuId}/menu_items/${id}`, { method: 'DELETE' }).then(() => document.getElementById(`article-${id}`).remove()).then(() => {
        numOfMenuItems -= 1;
        document.getElementById('numberOfMenuItems').innerHTML = `There are ${numOfMenuItems} menu items in this menu`;
    });
};
