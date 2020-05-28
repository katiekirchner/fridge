import React from 'react';
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../styles.css"
import img_A from "./images/anna_img.JPG"
import NavBar from '../../components/Navbar/Navbar';

export default class About_Anna extends React.Component {
    render() {
        return (
            <body>
            <NavBar></NavBar>
            <div>
                <div class="content">
                    <div class="image">
                        <Image class ="image" src={img_A} thumbnail fluid />
                    </div>
                    <div class="about_indiv_info">
                        <p>Anna Rachel Valdez
                            <br></br>Scrum Master</p>
                    </div>
                    <div class="about_more_info">
                        <p> <br></br> <br></br>
                            Hello! I'm a Computer Science and Psychology major student at San Francisco State University.
                            As the scrum master, my goal is to make the team effective with communication
                            throughout the development of our product
                            in order to ensure its successful implementation. This project would help me prepare for the real world.
                            <br></br> <br></br>
                            Outside of school, I introduce computer science to elementary school students.
                            I enjoy coffee and korean dramas.
                        </p>
                    </div>
                </div>
            </div>
            </body>
        );
    }

}
