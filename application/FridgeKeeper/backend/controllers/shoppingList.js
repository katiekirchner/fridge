const ShoppingList = require('../dao/orm/ShoppingList')

function addToList (req, res){

  const household_id = req.body.household_id;
  const itemList = req.body.list

  itemList.forEach((item) => {
    new ShoppingList(household_id, item.item, item.quantity).add(res)
  });

}

function deleteFromList(req, res){
    const {household_id, item_id, date} = req.body
  new ShoppingList(household_id, item_id, date).delete(res)
}

function showShoppinglist(req, res){
  const household_id = req.query.household_id;

  new ShoppingList(household_id).showlist(res)
}

module.exports = {
    addToList,
    deleteFromList,
    showShoppinglist
}
