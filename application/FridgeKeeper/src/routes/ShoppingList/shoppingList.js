import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../../components/Navbar/Navbar';
import {Image, Row, Col, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './shoppingList_style.css'
import { AlertHeading } from 'react-bootstrap/Alert';

class ShoppingList extends React.Component {
    state = {
        loading: true,
        household_id: 0,
        list_items: [],
    };


    async componentDidMount() {
        //this.getList()
        // this.addToList()

        console.log(this.state.list_items)
    }


    async getList() {
        var household_id = this.state.household_id;

        const response = await fetch('backend/shoppingList?household_id=' + household_id,
        {
            method: 'GET'
        });

        const body = await response.json();
        if(response.status !== 200) {
            throw Error(body.message)
        }
        body.sort((a, b) => {
                if(a.name < b.name) { return -1 }
                if(a.name > b.name) { return 1 }
                return 0}
            )
        body.map((item, index)=>{
            if (item.quantity_needed > 0) {
                this.state.list_items.push(item);
            }
        });

        this.setState({loading:false})
    }


  // async addToList(list_item) {
  //   const response = await fetch('backend/shoppingList',
  //   {
  //       method: 'PUT',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //           household_id: this.state.household_id,
  //           item_id: list_item
  //       })
  //   })
  //   .then(res => res.text())
  //   .then(rs => console.log(rs))
  //
  // }



    sortShoppingList(event) {
        var index = event.target.value;
        if (index == 1)
            this.setState({list_items: this.state.list_items.sort((a, b) => {
                if(a.name < b.name) { return -1 }
                if(a.name > b.name) { return 1 }
                return 0})}
            )
        else if (index == 2)
            this.setState({list_items: this.state.list_items.sort((a, b) => a.quantity_needed - b.quantity_needed)})
        else if (index == 3)
            this.setState({list_items: this.state.list_items.sort((a, b) => b.quantity_needed - a.quantity_needed)})
    }



  render() {
        return (
            <body>
                <NavBar />
                <div>
                    <div class="shopping-list">
                        <Row id="title">
                            Shopping List
                            <Link to="/add-to-list"><i class="fa fa-plus-square"/></Link>
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
                                    onChange={this.sortShoppingList.bind(this)}>
                                    <option value='1'>Name</option>
                                    <option value='2'>Quantity: Low to High</option>
                                    <option value='3'>Quantity: High to Low</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <div class="row_cont">
                            {this.state.loading || !this.state.list_items ? (
                                <Row />
                            ) : (
                                <Row className="justify-content-lg-center justify-content-lg-center justify-content-xs-center">
                                    {this.state.list_items.map((item, index)=>{
                                        return (
                                            <div class="cell">
                                                <Row class="item">
                                                    <Col xs={"auto"} md={"auto"}>
                                                        <div class="num"> {index+1} </div>
                                                    </Col>
                                                    <Col xs={10} s={8} md={6} lg={4} xl={3}>
                                                        <Image src={item.img_id} rounded fluid/>
                                                    </Col>
                                                    <Col xs={10} s={8} lg={6} style={{maxWidth:'500px'}}>
                                                        <Row id="details-box">
                                                            <Col xs={8} style={{paddingLeft:'50px'}}>
                                                                <h3>{item.name}</h3>
                                                                <p>Quantity to buy: {item.quantity_needed}</p>
                                                            </Col>
                                                            <Col xs={4} style={{'text-align':'right', paddingRight:'30px'}}>
                                                                <i class="fa fa-shopping-cart"/>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>
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

export default ShoppingList;
