import React from 'react'

import NavBar from '../../components/Navbar/Navbar';
import {Card, Image} from "react-bootstrap";

import "../../styles.css";
import "./recipe_style.css"
import {Link} from "react-router-dom";
import back_btn from "../Profile/image/back_icon.png";
import recipe1 from "./images/recipe1.jpg"

class IndividualRecipe extends React.Component {
    render() {
        return (
            <body>
            <NavBar></NavBar>
            <Link to="/recipes">
                <div class={"return_btn"}>
                    <Image src={back_btn} roundedCircle fluid/>
                </div>
            </Link>
            <div class={"layout"}>
                <div class={"img"}>
                    <Image src={recipe1} />
                </div>
                <h5>Cauliflower parmigiana pasta bake</h5>
                <p class={"details"}>45 min | Serves 4 | Vegan</p>
                <div className={"instructions"}>
                    <p class={"subtitle"}>Ingredients</p>
                    <ul type="square">
                        <li>1 large head of cauliflower</li>
                        <li>1 cup cooked basmati rice</li>
                        <li>1 egg plus 2 egg yolks</li>
                        <li>½ tbsp dried oregano</li>
                        <li>1 x 400g tin crushed tomatoes</li>
                        <li>1 red onion</li>
                        <li>2 cloves garlic</li>
                    </ul>
                </div>
                <p className={"subtitle"}>Instructions</p>
                <ol>
                    <li>Preheat the oven to 180C. Boil the pasta for one minute less than the packet instructions suggest, drain and set aside.</li>
                    <li>Combine the blitzed cauliflower, rice, eggs and oregano in a bowl. Use your hands to roll the mixture into balls,
                        if they seem to crumble, return to the bowl and keep massaging – the ingredients will continue to come together.</li>
                    <li>Add one to two tablespoons of olive oil to a frypan and place over medium heat. Add the cauliflower balls and cook to brown lightly </li>
                </ol>
            </div>

            </body>
        );
    }

}

export default IndividualRecipe;