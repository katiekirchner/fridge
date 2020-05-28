import React from 'react'

import NavBar from '../../components/Navbar/Navbar';
import Switch from "react-switch";
import {Button, Card, Image} from "react-bootstrap";


import img_user from "./image/default-user.png"
import "./profile_style.css"
import "../../styles.css";
import back_btn from "./image/back_icon.png";
import {Link} from "react-router-dom";


class NotificationSettings extends React.Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

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
                        <Card.Title class={"title"}>Notification Settings</Card.Title>
                        <Card.Text>
                            <p className={"text-muted"} class={"subtitle"}>Receive notifications when</p>
                        </Card.Text>
                        <Card.Text>
                            <label>
                                <small className="text-muted">Item is expiring</small>
                                <div class={"switch"}>
                                    <Switch onChange={this.handleChange} checked={this.state.checked}/>
                                </div>
                            </label>
                            <br />
                            <label>
                                <small className="text-muted">Item is depleting</small>
                                <div className={"switch"}>
                                    <Switch onChange={this.handleChange} checked={this.state.checked} class={"switch"}/>
                                </div>
                            </label>
                            <br />
                            <label>
                                <small className="text-muted">Item intake is unhealthy</small>
                                <div className={"switch"}>
                                    <Switch onChange={this.handleChange} checked={this.state.checked} class={"switch"}/>
                                </div>
                            </label>
                            <br />
                            <Card.Text>
                                <p className={"text-muted"} class={"subtitle"}>Receive daily email for</p>
                            </Card.Text>
                            <label>
                                <small className="text-muted">Calories and nutrition consumption</small>
                                <div className={"switch"}>
                                    <Switch onChange={this.handleChange} checked={this.state.checked} class={"switch"}/>
                                </div>
                            </label>
                            <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </body>
        );
    }

}

export default NotificationSettings;