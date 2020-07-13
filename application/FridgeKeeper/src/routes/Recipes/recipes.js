import React from 'react'

import NavBar from '../../components/Navbar/Navbar';
import {Card, Button, FormControl, Row, Col, Container, Image} from "react-bootstrap";


import "../../styles.css";
import "./recipe_style.css"
import {Link} from "react-router-dom";

class Recipes extends React.Component {

    state = {
        query: '',
        searchItems: [],
        recIds: [],
        items: [],
        apiKey: "7951f9bdd70e4fea9e5f62eed05f1f4a"
    }

    async componentDidMount() {
       
        const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" 
        + this.state.apiKey + "&query="+ this.state.query +"&number=15";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({searchItems: data["results"]});


        for(let i = 0; i <15; i++){
            this.state.recIds[i] = this.state.searchItems[i].id;

            // this.state.recIds.push(this.state.searchItems[i].id)
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

    updateSearch(event) {
        console.log(event.target.value)
        this.setState({query: event.target.value});
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
    
            this.componentDidMount();
        }
    }



    render() {
        return (
            <body>
            <NavBar></NavBar>
            <div>
                <div className="search">
                    <span className="fa fa-search"></span>
                    <FormControl type="text" placeholder="Press 'Enter' to search for recipe" id="form-search" onChange={this.updateSearch.bind(this)}  onKeyDown={this.handleKeyPress}/>
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