import React from 'react';
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../styles.css"
import img_k from "./images/kk.png"
import NavBar from '../../components/Navbar/Navbar';

export default class About_Katie extends React.Component {
    render() {
        return (
          <body>
            <NavBar></NavBar>
            <div>
                <div class="content">
                    <div class="image">
                        <Image class ="image" src={img_k} thumbnail fluid />
                    </div>
                    <div class="about_indiv_info">
                        <p>Katie Kirchner
                        <br></br>Github Master</p>
                    </div>
                    <div class="about_more_info">
                        <p> <br></br> <br></br>
                            Hi there, my name is Katie Kirchner. I am a Bay Area native and am hoping to graduate this
                            May with my Bachelor's Degree in Computer Science. I have previously worked as a Junior Software
                            Developer at a travel company in Berkeley for about two years and left to finish my degree.
                            <br></br> <br></br>
                            Outside of software development, I'm a huge football fan and during the football offseason,
                            I enjoy watching basketball as well. During the winter, I try to make as many weekend ski trips
                            to Tahoe as I can. I also enjoy eating, cooking, and all things food related.
                        </p>
                    </div>
                </div>
            </div>
        </body>
        );
    }

}
