import React from 'react';
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../styles.css"
import img_ms from "./images/maria_img.jpg"
import NavBar from '../../components/Navbar/Navbar';

export default class About_Maria extends React.Component {
    render() {
        return (
            <body>
            <NavBar></NavBar>
            <div>
                <div class="content">
                    <div class="image">
                        <Image class ="image" src={img_ms} thumbnail fluid />
                    </div>
                    <div class="about_indiv_info">
                        <p>Maria Luciana Seljak
                            <br></br>Team Leader</p>
                    </div>
                    <div class="about_more_info">
                        <p> <br></br> <br></br>
                            Hello! I'm Maria Luciana Seljak, a Computer Science student at San Francisco State University.
                            As the team leader, my main goal is to guide the group throughout the development of our product
                            in order to ensure its successful implementation. After graduation (Spring 2020), I'll be working
                            at 'Medium', a startup in San Francisco. I strongly believe working on this collaborative project
                            will let me improve my skills and better prepare me for that upcoming experience.
                            <br></br> <br></br>
                            I'm originally from Argentina, where I've studied Graphic Design in the University of Buenos Aires.
                            Besides programming, I also enjoy photography, watching sports, surfing and travelling.
                        </p>
                    </div>
                </div>
            </div>
            </body>
        );
    }

}
