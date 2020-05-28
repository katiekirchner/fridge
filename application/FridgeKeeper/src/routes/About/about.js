import React from 'react';
import {Image, Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {Link} from 'react-router-dom'

import "./about_style.css"
import "../../styles.css"

import img_M from "./images/mica.png"
import img_ms from "./images/maria_img.jpg"
import img_cy from "./images/cyang_img.jpg"
import img_A from "./images/anna_img.JPG"
import img_k from "./images/kk.png"
import img_Ah from "./images/Alex.jpg"
import NavBar from '../../components/Navbar/Navbar';


export default class About extends React.Component {
    render() {
        return (
            <body>
                <NavBar></NavBar>
                <div>
                    <div class="content">
                        <div class="row_cont">
                            <Container fluid>
                                <Row>
                                    <Col> MEET OUR TEAM </Col>
                                    <Col xs={6} md={4}>
                                        <Link to={"/about_maria"}>
                                        <Image class ="image" src={img_ms} thumbnail fluid />
                                        </Link>
                                        <div class="about_info">
                                            <p>Maria Luciana Seljak
                                            <br></br>Team Lead</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Link to="/about_micaella">
                                            <Image class ="image" src={img_M} thumbnail fluid />
                                        </Link>
                                        <div class="about_info">
                                            <p>Micaella Morales
                                            <br></br>Front-end lead</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Link to={"/about_chunzheng"}>
                                            <Image class ="image" src={img_cy} thumbnail fluid />
                                        </Link>
                                        <div class="about_info">
                                            <p>Chunzheng Yang
                                                <br></br>Back-end Lead</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Link to={"/about_katie"}>
                                          <Image class ="image" src={img_k} thumbnail fluid />
                                        </Link>
                                        <div class="about_info">
                                            <p>Katie Kirchner
                                            <br></br>Github Master</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Link to="/about_anna">
                                            <Image class ="image" src={img_A} thumbnail fluid />
                                        </Link>
                                        <div class="about_info">
                                            <p>Anna Rachel Valdez
                                            <br></br>Scrum Master</p>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Link to="/about_alex">
                                            <Image class ="image" src={img_Ah} thumbnail fluid />
                                        </Link>
                                        <div class="about_info">
                                            <p>Alex Hall
                                            <br></br>Back-End Team Member</p>
                                        </div>
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
