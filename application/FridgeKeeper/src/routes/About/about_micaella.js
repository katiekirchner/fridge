import React from 'react';
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../styles.css"
import img_M from "./images/mica.png"
import NavBar from '../../components/Navbar/Navbar';

export default class About_Micaella extends React.Component {
    render() {
        return (
            <body>
                <NavBar></NavBar>
                <div>
                    <div class="content">
                        <div class="image">
                            <Image class ="image" src={img_M} thumbnail fluid />
                        </div>
                        <div class="about_indiv_info">
                            <p>Micaella Morales
                            <br></br>Front-end Lead</p>
                        </div>
                        <div class="about_more_info">
                            <p> <br></br> <br></br>
                                Hi! I'm Micaella Morales, a 21-year old 4th-year student at San Francisco State University.
                                I'm aiming to graduate this Spring 2020 and get a Bachelor's Degree in Computer Science, 
                                and a Minor in Mathematics. Moreover, this website is part of a project in one of the Software 
                                Engineering courses offered in our curriculum. I stand as the front-end lead of our team and
                                I'm eager to widen my knowledge on web development through this collaborative activity.
                                <br></br> <br></br>
                                Other than programming, I also enjoy watching science fiction and fantasy movies, as well 
                                as reading fictional stories. I would also to love to travel in the future, with the perks of
                                discovering new foods and places with my family and friends.
                            </p>
                        </div>
                    </div>
                </div>
            </body>
        );
    }

}
