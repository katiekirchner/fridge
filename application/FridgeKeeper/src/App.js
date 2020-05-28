import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './routes/Login/Login'
import SignUp from './routes/SignUp/SignUp'
import SignUp2 from './routes/SignUp/SignUp2'
import AddHousehold from './routes/SignUp/addHousehold'
import ExistingHousehold from './routes/SignUp/existingHousehold'
import Home from './routes/Home/home';
import About from './routes/About/about';
import Profile from './routes/Profile/profile';
import Account from './routes/Profile/account_settings';
import Recipes from './routes/Recipes/recipes';
import ShoppingList from './routes/ShoppingList/shoppingList';

import AddItems from './routes/Home/addItems';
import AddItemsMan from './routes/Home/addItemsMan';
import AddToList from './routes/ShoppingList/addToList';

import About_Micaella from './routes/About/about_micaella';
import About_Maria from './routes/About/about_maria';
import About_Cyang from './routes/About/about_chunzheng';
import About_Katie from './routes/About/about_katie';
import About_Anna from './routes/About/about_anna';
import About_Alex from './routes/About/about_alex';
import HouseholdSettings from "./routes/Profile/household_settings";
import NotificationSettings from "./routes/Profile/notification_settings";
import IndividualRecipe from "./routes/Recipes/single_recipe";


class App extends React.Component {
  state = {
    data: null
  };

  render() {return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/SignUp2" component={SignUp2} />
      <Route path="/addHousehold" component={AddHousehold} />
      <Route path="/existingHousehold" component={ExistingHousehold} />
      <Route path="/Login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/my_account" component={Account} />
      <Route path="/my_household" component={HouseholdSettings} />
      <Route path="/notification_settings" component={NotificationSettings} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipe" component={IndividualRecipe} />
      <Route path="/shopping-list" component={ShoppingList} />

      <Route path="/add-items" component={AddItems} />
      <Route path="/add-items-man" component={AddItemsMan} />
      <Route path="/add-to-list" component={AddToList} />

      <Route path="/about_micaella" component={About_Micaella} />
      <Route path="/about_maria" component={About_Maria} />
      <Route path="/about_chunzheng" component={About_Cyang} />
      <Route path="/about_katie" component={About_Katie} />
      <Route path="/about_anna" component={About_Anna} />
      <Route path="/about_alex" component={About_Alex} />

  </Switch>
  )}
}

export default App;