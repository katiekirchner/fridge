const ShoppingList = require('../dao/orm/ShoppingList')

function addToList (req, res){

  const user_id = req.body.user_id;
  const itemList = req.body.list

  itemList.forEach((item) => {

    new ShoppingList(
              user_id,
              item.name,
              item.quantity_needed,
              item.image
              ).add(res)
  });


}


function showShoppinglist(req, res){
  const user_id = req.query.user_id;
  console.log("Here1: ", user_id);
  ShoppingList.showShoppinglist(user_id, res)

  // new ShoppingList(user_id).showlist(res)
}

module.exports = {
    addToList,
    // deleteFromList,
    showShoppinglist
}
