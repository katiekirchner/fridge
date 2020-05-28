import React from 'react';
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../styles.css"
import img_cy from "./images/cyang_img.jpg"
import NavBar from '../../components/Navbar/Navbar';

export default class About_Cyang extends React.Component {
    render() {
        return (
            <body>
            <NavBar></NavBar>
            <div>
                <div class="content">
                    <div class="image">
                        <Image class ="image" src={img_cy} thumbnail fluid />
                    </div>
                    <div class="about_indiv_info">
                        <p>Chunzheng Yang
                            <br></br>Back-end Lead</p>
                    </div>
                    <div class="about_more_info">
                        <p> <br></br> <br></br>
                            Hello! I'm Chunzheng Yang. I am glad to do this project with my teammates.
                            I hope I can learn their advantages and become better.
                            <br></br> <br></br>
                            My main programming language is Java. 
                            I love coding (Java). 
                            I love studying the latest Java technologies.
                        </p>
                    </div>
                </div>
            </div>
            </body>
        );
    }

}
