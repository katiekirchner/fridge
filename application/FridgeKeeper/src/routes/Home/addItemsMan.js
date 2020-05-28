import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../../components/Navbar/Navbar';
import back_btn from "../../components/icons/back_icon.png"
import {Image, Button, Card, Col, Form, InputGroup, Modal, Carousel} from "react-bootstrap";
import { Link } from 'react-router-dom';


import './home_style.css'

class AddItemsMan extends React.Component {
    state = {
        initial: true,
        modalShow: false,
        isAddForm: false,
        search: '',
        searchItems: [],
        items: [],
        index: 0,
        apiKey: "e2c2a767a760438e80f424b1f6ccf9fb",
        user_id: localStorage.getItem("user_id"),
        item: {id: null, name: "", quantity: 0, exp: ""},
        // user_id: 2, // < --- HARD CODED, need to replace with current user_id
        num: 0,
        list: [],
        addItems: []
    }

    async sendListToDB() {
        console.log(this.state.items)
      const response = await fetch('/backend/item',
      {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              user_id: this.state.user_id,
              list: this.state.items
          })
      })
      .then(res => res.text())
      .then(rs => console.log(rs))

      console.log(response);

    }



    async searchItem() {
        const url = "https://api.spoonacular.com/food/products/search?apiKey=" + this.state.apiKey + "&query=" + this.state.search;
        const response = await fetch(url);
        const data = await response.json();

        console.log("heree" , data.products[3])

        this.setState({searchItems: data["products"]});
        console.log(this.state.searchItems)
    }


    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            console.log(this.state.search)
            this.searchItem();
            this.setState({modalShow: true})
            this.state.list.push({id: null, name: this.state.search, quantity: 0, exp: ""})
        }
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value});
    }

    selectItem(index) {
        this.setState({modalShow: false, index: index})
        console.log("index: ", this.state.index)
    }



    createModal() {
        return (
            <MyVerticallyCenteredModal
                searchItems={this.state.searchItems}
                show={this.state.modalShow}
                onHide={() => {this.setState({modalShow: false})}}
            />
        )
    }



    addForm(index) {
        this.setState({num: index+1})
        this.state.items.push({name: "", quantity: "1", exp: null, img_id: ""})
        this.state.addItems.push(
            <Form>
                <Form.Row style={{margin:'0px'}}>
                    <Form.Group as={Col} sm="5" md="4"
                        style={{margin:'10px 5px 5px 5px', maxWidth:'500px'}}>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter name of item"
                            defaultValue=""
                            id="addItems-form"
                            onChange={e => { this.setState({search: e.target.value});
                                this.state.items[index].name = e.target.value

                            }}
                            onKeyDown={this.handleKeyPress}
                        />
                    </Form.Group>
                    <Form.Group as={Col} sm="2" md="1"
                        onChange={e => this.state.items[index].quantity = e.target.value}
                        style={{margin:'10px 5px 5px 5px', maxWidth:'100px'}}>
                        <Form.Control as="select" id="addItems-form">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>Enter quantity</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} sm="5" md="4"
                        onChange={e => this.state.items[index].exp = e.target.value}
                        style={{margin:'10px 5px 5px 5px', maxWidth:'330px', minWidth:'300px'}}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Exp</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" id="addItems-form"></Form.Control>
                        </InputGroup>

                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }

    render() {
        if(this.state.initial) {
            this.addForm(this.state.num);
            this.setState({ initial: false })
        }

        if(this.state.isAddForm) {
            this.addForm(this.state.num);
            this.setState({ isAddForm: false })
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
                            {this.state.addItems.map((item, index)=>{
                                return item
                            })}
                        </div>
                        <div>
                            <Button variant="info" onClick={() => this.setState({ isAddForm: true})}>
                                Add more
                            </Button>
                        </div>
                        <div class="addManually" id="final-add">
                            <Link to="/home">
                                  <Button variant="info" size="lg" block onClick={() => this.sendListToDB()}>
                                    Add to Inventory
                                </Button>
                            </Link>
                        </div>
                            {(this.state.searchItems != null) ? (
                                this.createModal()
                            ) : (
                                console.log("no search items")
                            )}

                    </div>

                </div>

            </body>
        );
    }
}

function MyVerticallyCenteredModal(props) {

  let index = 0;
  const handleSelect = (e) => {
    index++;
    console.log("Index!!: ", index);
  };

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"
                    style={{fontFamily:'Concert One, cursive', fontSize:'25px', margin:'auto', paddingLeft:'40px'}}>
                    Add Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily:'Concert One, cursive', fontSize:'20px'}}>
                <Carousel slide={false} interval={false} indicators={false} onClick={handleSelect}>
                    {props.searchItems.map((item, index) => {
                        return (
                        !item ? (
                            <Carousel.Item/>
                        ) : (
                            <Carousel.Item>
                                <Card>
                                    <Card.Img variant="top" src={item.image} style={{maxWidth:'auto', height:'300px', objectFit:'contain'}}/>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>

                        ))
                    })}
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" size="lg" onClick={props.onHide}> Choose </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddItemsMan;