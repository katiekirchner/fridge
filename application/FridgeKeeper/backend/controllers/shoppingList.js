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

  // itemList.forEach((item) => {
  //   new ShoppingList(household_id, item.item, item.quantity).add(res)
  // });

}

// function deleteFromList(req, res){
//     const {household_id, item_id, date} = req.body
//   new ShoppingList(household_id, item_id, date).delete(res)
// }

function showShoppinglist(req, res){
  const user_id = req.query.user_id;
  console.log("Here1: ", user_id);

  new ShoppingList(user_id).showlist(res)
}

module.exports = {
    addToList,
    // deleteFromList,
    showShoppinglist
}
