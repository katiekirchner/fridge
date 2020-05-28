import React from 'react'

import NavBar from '../../components/Navbar/Navbar';
import {Button, Image, Form, Col, InputGroup} from "react-bootstrap";
import {Link} from 'react-router-dom'

import back_btn from "./image/back_icon.png"
import "./profile_style.css"
import "../../styles.css";
import img_user from "./image/user.png";


class Account extends React.Component {
    render() {
        return (
            <body>
            <NavBar></NavBar>
            <div class={"account_settings"}>
                <Link to="/profile">
                <div class={"return_btn"}>
                    <Image src={back_btn} roundedCircle fluid/>
                </div>
                </Link>
                <div className={"profile_img"}>
                    <Image src={img_user} roundedCircle fluid/>
                </div>
                <h5 className={"profile_name"}>John Smith</h5>
                <Link to={"/my_account"}>
                    <div class={"link"}>
                        <p>Change profile picture</p>
                    </div>
                </Link>
            </div>

            <div className={"form_settings"}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="John"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Smith"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="jsmith88"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="jsmith@gmail.com" required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="***************" required />
                        </Form.Group>
                    </Form.Row>
                    <Link to={"/my_account"}>
                        <div class={"link"}>
                            <p>Change password</p>
                        </div>
                    </Link>
                    <Button variant="info" size="lg" block>
                        Save Changes
                    </Button>
                </Form>
            </div>
            </body>
        );
    }

}

export default Account;