import React from 'react';
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";


import "../../styles.css"
import img_A from "./images/Alex.jpg"
import NavBar from '../../components/Navbar/Navbar';

export default class About_Alex extends React.Component {
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
                        <p>Alex Hall
                            <br></br>Back-End Team Member</p>
                    </div>
                    <div class="about_more_info">
                        <p> <br></br> <br></br>
                            Hello! I'm a Computer Science major graduating S'2020.
                            <br></br> <br></br>
                            I enjoy playing and watching video games in my spare time.
                        </p>
                    </div>
                </div>
            </div>
            </body>
        );
    }

}
