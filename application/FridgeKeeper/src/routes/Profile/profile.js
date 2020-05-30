import React from 'react'

import NavBar from '../../components/Navbar/Navbar';
import {Button, Image, Card} from "react-bootstrap";
import {Link} from 'react-router-dom'

import img_user from "./image/user.png"
import "./profile_style.css"
import "../../styles.css";


class Profile extends React.Component {
    logout() {
        localStorage.removeItem("user_id")
    }

    render() {
        return (
            <body>
            <NavBar></NavBar>
            <div class={"personal_info"}>
                <div class={"profile_img"}>
                    <Image src={img_user} roundedCircle fluid/>
                </div>
                <h5 class={"profile_name"}>John Smith</h5>
                <div class={"user_info"}>
                    <p>Oct 15, 1988 (32 years old)</p>
                    <p>Allergies: None | Dietary Needs: None</p>
                </div>
            </div>
            {/* <div className={"card-style"}>
                <Card>
                    <Card.Body>
                        <Card.Title>Household</Card.Title>
                        <Card.Text>
                            <small className="text-muted">Smith Family</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class={"card-style"}>
                <Card>
                    <Card.Body>
                        <Card.Title>Participants</Card.Title>
                        <Card.Text>
                            <small className="text-muted">Susan Smith</small>
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Jack Smith</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> */}

            <div class={"profile_settings"}>
                <Link to="/my_account">
                    <Button variant="info" size="lg" block>
                        Edit Account Info
                    </Button>
                </Link>
                {/* <Link to="/my_household">
                    <Button variant="info" size="lg" block>
                        My Household
                    </Button>
                </Link>
                <Link to="/notification_settings">
                    <Button variant="info" size="lg" block>
                        Notification Settings
                    </Button>
                </Link> */}
                <Link to="">
                    <Button variant="secondary" size="lg" onClick={this.logout()} block>
                        Log Out
                    </Button>
                </Link>
            </div>
            </body>
        );
    }

}

export default Profile;