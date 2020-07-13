import React from 'react'

import NavBar from '../../components/Navbar/Navbar';
import {Card, Button, FormControl, Row, Col, Container, Image} from "react-bootstrap";

import recipe1 from "./images/recipe1.jpg"
import recipe2 from "./images/recipe2.jpg"
import recipe3 from "./images/recipe3.jpg"
import recipe4 from "./images/recipe4.jpeg"
import recipe5 from "./images/recipe5.jpg"
import recipe6 from "./images/recipe6.jpg"

import "../../styles.css";
import "./recipe_style.css"
import {Link} from "react-router-dom";

class Recipes extends React.Component {

    state = {
    
        searchItems: [],
        recIds: [],
        items: [],
        apiKey: "95f4c2ce91394cf9bb0d18fb3b03714b"
    }

    async componentDidMount() {
        // const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" 
        //                 + this.state.apiKey + "&query=" + this.state.search + "&number=50";
        const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" 
        + this.state.apiKey + "&query=pasta"+ "&number=15";
        const response = await fetch(url);
        const data = await response.json();

        // console.log("heree" , data["results"][0].id)
        // this.setState({recIds: data["results"].id});

        this.setState({searchItems: data["results"]});
        // console.log(this.state.searchItems[0].id)

        for(let i = 0; i <15; i++){
            this.state.recIds.push(this.state.searchItems[i].id)
        }

        this.getRecipes();
    }


    async getRecipes(){

        const url = "https://api.spoonacular.com/recipes/informationBulk?apiKey=" 
        + this.state.apiKey + "&ids="+ this.state.recIds.toString();
        const response = await fetch(url);
        const data = await response.json();

        console.log(data)

        this.setState({items: data})
    }




    render() {
        return (
            <body>
            <NavBar></NavBar>
            <div>
                <div className="search">
                    <span className="fa fa-search"></span>
                    <FormControl type="text" placeholder="Search for recipe" id="form-search"/>
                </div>
                <div class="results">
                    <div class="row_cont">
                        <Container fluid>
                            <Row className="justify-content-lg-center justify-content-lg-center justify-content-xs-center">
                            {this.state.items.map((item, index)=>{
                                return (
                                
                                <Col xs={"auto"} md={"auto"}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.image} class={"picture"} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.creditsText}
                                            </Card.Text>
                                            <Card.Text class={"details"}>
                                                {item.readyInMinutes} min | Serves {item.servings} | {item.dishTypes[0]}
                                            </Card.Text>
                                             <a target="_blank" href={item.sourceUrl}>
                                                <Button variant="info" class={"btn"}>See recipe</Button>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </Col>
                                    )
                                })}
                               
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </body>
        );
    }

}

export default Recipes;