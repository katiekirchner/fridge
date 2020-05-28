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
                                <Col xs={"auto"} md={"auto"}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={recipe1} class={"picture"} />
                                        <Card.Body>
                                            <Card.Title>Cauliflower Pasta</Card.Title>
                                            <Card.Text>
                                                Parmigiana pasta bake with cauliflower balls.
                                            </Card.Text>
                                            <Card.Text class={"details"}>
                                                45 min | Serves 4 | Vegan
                                            </Card.Text>
                                            <Link to={"/recipe"}>
                                                <Button variant="info" class={"btn"}>See recipe</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </Col>
                                <Col xs={"auto"} md={"auto"}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={recipe2} class={"picture"} />
                                        <Card.Body>
                                            <Card.Title>Black Pepper Chicken</Card.Title>
                                            <Card.Text>
                                                Caramelized black pepper chicken with white rice.
                                            </Card.Text>
                                            <Card.Text class={"details"}>
                                                25 min | Serves 4 | Paleo
                                            </Card.Text>
                                            <Button variant="info" class={"btn"}>See recipe</Button>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </Col>
                                <Col xs={"auto"} md={"auto"}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={recipe3} class={"picture"} />
                                        <Card.Body>
                                            <Card.Title>Couscous Bowls</Card.Title>
                                            <Card.Text>
                                                Mediterranean couscous bowls with hummus, salad and lemon.
                                            </Card.Text>
                                            <Card.Text class={"details"}>
                                                25 min | Serves 2 | Vegan
                                            </Card.Text>
                                            <Button variant="info" class={"btn"}>See recipe</Button>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </Col>
                                <Col xs={"auto"} md={"auto"}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={recipe4} class={"picture"} />
                                        <Card.Body>
                                            <Card.Title>Roasted Pork</Card.Title>
                                            <Card.Text>
                                                Honey garlic glazed pork loin roast with peppers.
                                            </Card.Text>
                                            <Card.Text class={"details"}>
                                                65 min | Serves 4 | Paleo
                                            </Card.Text>
                                            <Button variant="info" class={"btn"}>See recipe</Button>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </Col>
                                <Col xs={"auto"} md={"auto"}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={recipe5} class={"picture"} />
                                        <Card.Body>
                                            <Card.Title>Crispy Chicken Tenders</Card.Title>
                                            <Card.Text>
                                                Crispy chicken tenders with cucumber tomato salad and corn.
                                            </Card.Text>
                                            <Card.Text class={"details"}>
                                                30 min | Serves 4 | Paleo
                                            </Card.Text>
                                            <Button variant="info" class={"btn"}>See recipe</Button>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </Col>
                                <Col xs={"auto"} md={"auto"}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={recipe6} class={"picture"} />
                                        <Card.Body>
                                            <Card.Title>One-Pot Pasta</Card.Title>
                                            <Card.Text>
                                                Penne with marinara sauce and basil.
                                            </Card.Text>
                                            <Card.Text class={"details"}>
                                                15 min | Serves 4 | Vegan
                                            </Card.Text>
                                            <Button variant="info">See recipe</Button>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </Col>
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