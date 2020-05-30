import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../../components/Navbar/Navbar';
import {FormControl, Row, Col, Card, Modal, Button, Image, Form} from 'react-bootstrap';

import './home_style.css'
import { Link } from 'react-router-dom';


function MyVerticallyCenteredModal(props) {
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
                    Edit Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontFamily:'Concert One, cursive', fontSize:'20px'}}>
                {!props.items ? (
                    <Row>no item</Row>
                ) : (
                    <Row className="justify-content-center">
                        <Col xs={12} style={{maxWidth:'300px', maxHeight:'300px', margin:'0px'}}>
                            <Image src={props.items[props.index].img_id} thumbnail />
                        </Col>
                        <Col>
                            <Row style={{marginBottom:'10px'}}>
                                <Col style={{margin:'0px', padding:'0px', maxWidth:'50px'}}>
                                    Item:
                                </Col>
                                <Col>
                                    <Form.Control
                                        required
                                        type="text"
                                        defaultValue={props.items[props.index].name}
                                        style={{maxWidth:'150px'}}
                                    /> 
                                </Col>
                            </Row>
                            <Row style={{marginBottom:'10px'}}>
                                <Col style={{margin:'0px', padding:'0px', maxWidth:'150px'}}>
                                    Expiration Date: 
                                </Col>
                                <Col>
                                    <Form.Control type="date" style={{maxWidth:'170px'}}/>
                                </Col>
                            </Row>
                            <Row style={{marginBottom:'10px'}}> 
                                <Col style={{margin:'0px', padding:'0px', maxWidth:'90px'}}>
                                    Quantity:
                                </Col>
                                <Col>
                                    <Form.Control
                                        required
                                        type="text"
                                        defaultValue={props.items[props.index].quantity}
                                        style={{maxWidth:'150px'}}
                                    /> 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" size="lg" block> Save </Button>
            </Modal.Footer>
        </Modal>
    );
}

class Home extends React.Component {
    state = {
        user_id: localStorage.getItem("user_id"),
        loading: true,
        items: null,
        currIndex: 0,
        filteredItems: null,
        search: '',
        modalShow: false
    };

    async componentDidMount() {
        const response = await fetch('/backend/items?user_id=' + this.state.user_id,
        {
            method: 'GET'
        })

        console.log(response)

        const data = await response.json();
        console.log(data);
        data.sort((a, b) => {
            if(a.name < b.name) { return -1 }
            if(a.name > b.name) { return 1 }
            return 0}
        )
        this.setState({items: data, filteredItems: data, loading:false})
    }

    sortItems(event) {
        var index = event.target.value;
        if (index == 1) 
            this.setState({items: this.state.items.sort((a, b) => {
                if(a.name < b.name) { return -1 }
                if(a.name > b.name) { return 1 }
                return 0})}
            )
        else if (index == 2)
            this.setState({items: this.state.items.sort((a, b) => a.quantity - b.quantity)})
        else if (index == 3)
            this.setState({items: this.state.items.sort((a, b) => b.quantity - a.quantity)})
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {
        if (this.state.filteredItems != null && this.state.search != null) {
            this.state.filteredItems = this.state.items.filter(
                (item) => {
                    return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
        }

        return (
            <body>
                <NavBar/>
                <div>
                    <div class="inventory">
                        <Row id="title">
                            Inventory 
                            <Link to="/add-items-man"><i class="fa fa-plus-square"/></Link>
                        </Row>
                        <Row style={{maxWidth:'300px', float:'right', marginBottom:'50px'}}>
                            <Col style={{maxWidth:'70px', padding:'0px'}}>
                                <Form.Label style={{fontSize:'20px'}}>
                                    Sort by:
                                </Form.Label>
                            </Col>
                            <Col style={{width:'250px'}}>
                                <Form.Control as="select" 
                                    style={{margin:'0px', padding:'0px', border:'1px solid grey', background:'whitesmoke'}}
                                    onChange={this.sortItems.bind(this)}>
                                    <option value='1'>Name</option>
                                    <option value='2'>Quantity: Low to High</option>
                                    <option value='3'>Quantity: High to Low</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row class="form">
                            <div class="search">
                                <span class="fa fa-search"/>
                                <FormControl id="form-search" type="text" placeholder="Search" onChange={this.updateSearch.bind(this)}/>
                            </div>
                        </Row>
                        <div class="row_cont">
                            {this.state.loading || !this.state.items ? (
                                <Row />
                            ) : (
                                <Row className="justify-content-lg-center justify-content-md-center justify-content-xs-center">
                                    {this.state.filteredItems.map((item, index)=>{
                                        let expirationDate = '';
                                        (item.expirationDate != null) ? (expirationDate = item.expirationDate) : (expirationDate = 'N/A')
                                        return (
                                            <Col xs={"auto"} md={"auto"} >
                                                <div class="cell">
                                                    <Card style={{ width: '18rem' }}>
                                                        <div class="container">
                                                            <Card.Img variant="top" src={item.img_id} />
                                                            <div class="overlay">
                                                                <div class="img-txt">
                                                                    <Link onClick={() => this.setState({modalShow: true, currIndex: index})}>Edit</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <Card.Body>
                                                            <Card.Title>{item.name}</Card.Title>
                                                            <Card.Text> Quantity:  {item.quantity} </Card.Text>
                                                            {/*<Card.Text> Exp. Date: {expirationDate} </Card.Text>*/}
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                                <MyVerticallyCenteredModal
                                                    items={this.state.items}
                                                    index={this.state.currIndex}
                                                    show={this.state.modalShow}
                                                    onHide={() => this.setState({modalShow: false})}
                                                />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            )}
                        </div>
                    </div>
                </div> 
            </body>
        );
    }

}

export default Home;