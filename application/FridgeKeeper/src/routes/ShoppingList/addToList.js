import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../../components/Navbar/Navbar';
import back_btn from "../../components/icons/back_icon.png"
import {Image, Button, Col, Form, InputGroup} from "react-bootstrap";
import { Link } from 'react-router-dom';

class AddToList extends React.Component {
    state = {
        num: 3,
        addItems: [],
        form: []

    }


    async sendListToDB() {

      const response = await fetch('backend/shoppingList',
      {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              household_id: this.state.household_id,
              list: this.state.addItems,
          })
      })
      .then(res => res.text())
      .then(rs => console.log(rs))

    }


    returnForm() {
        return this.state.form[this.state.form -1];
    }

    addForm() {
        this.state.form.push(
            <Form>
                <Form.Row>
                    <Form.Group as={Col} sm="8" md="6"
                        style={{margin:'10px 5px 5px 5px', maxWidth:'500px'}}>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter name of item"
                            defaultValue=""
                            name='item'
                            id="addItems-form"
                        />
                    </Form.Group>
                    <Form.Group as={Col} sm="2" md="1"
                        style={{margin:'10px 5px 5px 5px', maxWidth:'100px'}}>
                        <Form.Control  name="quantity" value={this.state.quantity} as="select" id="addItems-form" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option>Enter quantity</option>
                            <option defaultValue=""></option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>
        );

        // this.returnForm();
    }

    render() {
        for(var i=0; i<this.state.num; i++) {
            this.addForm();
        }
        return (
            <body>
                <NavBar />
                <div>
                    <div>
                        <Link to="/home">
                        <div class={"return_btn"}>
                            <Image src={back_btn} roundedCircle fluid/>
                        </div>
                        </Link>
                    </div>

                    <div class="addItems">
                        <div class="title-add" id="man">
                            Add Items
                        </div>
                        <div>
                            {this.state.form.map((item, index)=>{
                                return item
                            })}
                        </div>
                        <div>
                            <Button variant="info" onClick={() => this.setState({ num: 1})}>
                                Add more
                            </Button>
                        </div>
                        <div class="addManually" id="final-add">
                          <Link to="/shopping-list">
                            <Button variant="info" size="lg" block onClick={() => this.sendListToDB()}>
                                Add to List
                            </Button>
                          </Link>
                        </div>
                    </div>


                </div>

            </body>
        );
    }
}

export default AddToList;
