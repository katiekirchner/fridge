const Item = require('../dao/orm/Item')

function addItem (req, res){
    const user_id = req.body.user_id;
    const itemList = req.body.list

    console.log(req.body.list, user_id);

    itemList.forEach((item) => {
      new Item(
                item.name,
                null,
                0,
                item.quantity,
                item.exp,
                null,
                item.img_id,
                user_id,
                null).add(res)
    });

}

function showItems (req, res){
    const user_id = req.query.user_id
    Item.showItems(user_id, res)
}

function showAll (res){
    Item.showAll(res)
}

module.exports = {
    addItem,
    showItems,
    showAll
}
