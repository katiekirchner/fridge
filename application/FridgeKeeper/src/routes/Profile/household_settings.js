import React from 'react'

import NavBar from '../../components/Navbar/Navbar';
import {Button, Card, Image} from "react-bootstrap";
import {Link} from 'react-router-dom'

import "./profile_style.css"
import "../../styles.css";
import back_btn from "./image/back_icon.png";


class HouseholdSettings extends React.Component {
    render() {
        return (
            <body>
            <NavBar></NavBar>
            <Link to="/profile">
                <div class={"return_btn"}>
                    <Image src={back_btn} roundedCircle fluid/>
                </div>
            </Link>
            <div className={"card-style"}>
                <Card>
                    <Card.Body>
                        <Card.Title>My Household</Card.Title>
                        <Card.Text>
                            <small className="text-muted">Smith Family</small>
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">ID: V0DI6QV</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className={"profile_settings"}>
                <Link to="/my_household">
                    <Button variant="info" size="lg" block>
                        Leave household
                    </Button>
                </Link>
                <Link to="/my_household">
                    <Button variant="info" size="lg" block>
                        Create a new household
                    </Button>
                </Link>
                <Link to="/my_household">
                    <Button variant="info" size="lg" block>
                        Join and existing household
                    </Button>
                </Link>
            </div>
            </body>
        );
    }

}

export default HouseholdSettings;