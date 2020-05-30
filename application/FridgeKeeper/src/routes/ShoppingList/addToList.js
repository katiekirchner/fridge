import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../../components/Navbar/Navbar';
import back_btn from "../../components/icons/back_icon.png"
import {Image, Button, Card, Col, Form, InputGroup, Modal, Carousel} from "react-bootstrap";
import { Link } from 'react-router-dom';

import img from "./shopping.png"



class AddToList extends React.Component {
    state = {
        initial: true,
        modalShow: false,
        isAddForm: false,
        search: '',
        searchItems: [],
        items: [],
        index: 0,
        apiKey: "21d6feec062a486bad9afe2bbb314ca7",
        user_id: localStorage.getItem("user_id"),
        item: {id: null, name: "", quantity_needed: 0, image: ""},
        num: 0,
        list: [],
        addItems: [],
        testItem: 0
    }

    async sendListToDB() {

        const response = await fetch('backend/shoppingList',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                user_id: this.state.user_id,
                list: this.state.list,
            })
        })
        .then(res => res.text())
        .then(rs => console.log(rs))

    }

    async searchItem() {
        const url = "https://api.spoonacular.com/food/products/search?apiKey=" 
                        + this.state.apiKey + "&query=" + this.state.search + "&number=50";
        const response = await fetch(url);
        const data = await response.json();


        this.setState({searchItems: data["products"]});
        // console.log(this.state.searchItems)
    }



    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
    
            this.searchItem();
            this.setState({modalShow: true})
        }
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value});
    }



    selectCarItem() {

        var itemAdded = this.state.searchItems[this.state.testItem];
        var listItem = this.state.list.findIndex(x => x.name === this.state.search)


        this.state.list[listItem].image =itemAdded.image;
        this.setState({modalShow: false});

    }

    createModal(testItem) {  
        const index = testItem

        const handleSelect = (selectedIndex, e) => {
            this.setState({testItem: selectedIndex});

            console.log("here: ", selectedIndex);
        };

 
        return (
            <Modal
                searchItems={this.state.searchItems}
                show={this.state.modalShow}
                onHide={() => {this.setState({modalShow: false})}}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"
                        style={{fontFamily:'Concert One, cursive', fontSize:'25px', margin:'auto', paddingLeft:'40px'}}>
                        Add Items
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body style={{fontFamily:'Concert One, cursive', fontSize:'20px'}}>
                    <Carousel slide={false} interval={false} indicators={false} activeIndex={index} onSelect={handleSelect} >
                        {this.state.searchItems.map((item, index) => {
                            return (
                            !item ? (
                                <Carousel.Item/>
                            ) : (
                                <Carousel.Item id = "card" key={index}>
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
                    <Button variant="info" size="lg" onClick={() => this.selectCarItem()}> Choose </Button>
                </Modal.Footer>
            </Modal>
            );
        
    }


    addForm(index) {
        this.setState({num: index+1})
        console.log("Num: ", this.state.num);
        this.state.list.push({name: "", quantity_needed: 1, image: ""})
        console.log("List: ", this.state.list)
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
                                this.state.list[index].name = e.target.value

                            }}
                            onKeyDown={this.handleKeyPress}
                        />
                    </Form.Group>
                    <Form.Group as={Col} sm="2" md="1"
                        onChange={e => 
                            {this.state.list[(e.target.id == '') ? 0 :  e.target.id].quantity_needed_needed = e.target.value}

                        }

                        // onChange={e => this.state.items[e.target.id].quantity_needed = e.target.value}
                        style={{margin:'10px 5px 5px 5px', maxWidth:'100px'}}>
                        <Form.Control as="select" id={this.state.num}>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Form.Control>
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
                            Add Items To Shopping List
                        </div>
                        <p> Press enter to browse item options </p>
                        <br></br>
                        <div>
                            {this.state.addItems.map((item, index)=>{
                                return item
                            })}
                        </div>
                        <div>
                            <Button variant="info" onClick={() => this.setState({ isAddForm: true})}>
                                Add additional items
                            </Button>
                        </div>
                        <div class="addManually" id="final-add">
                                {/* <Button variant="info" size="lg" block onClick={() => this.sendListToDB()}>
                                    Add to Inventory
                                </Button> */}
                            <Link to="/shopping-list">
                                  <Button variant="info" size="lg" block onClick={() => this.sendListToDB()}>
                                    Add to Shopping List
                                </Button>
                            </Link>

                        
                        </div>

                            {(this.state.searchItems != null) ? (
                                this.createModal()
                            ) : (
                                console.log("no search items")
                            )}

                    </div>
                    <div class="gImage">
                            <Image src={img} />
                    </div>
                </div>
               
            </body>
        );
    }
}

// class AddToList extends React.Component {
//     state = {
//         num: 3,
//         addItems: [],
//         form: []

//     }


//     async sendListToDB() {

//       const response = await fetch('backend/shoppingList',
//       {
//           method: 'PUT',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body:JSON.stringify({
//               household_id: this.state.household_id,
//               list: this.state.addItems,
//           })
//       })
//       .then(res => res.text())
//       .then(rs => console.log(rs))

//     }


//     returnForm() {
//         return this.state.form[this.state.form -1];
//     }

//     addForm() {
//         this.state.form.push(
//             <Form>
//                 <Form.Row>
//                     <Form.Group as={Col} sm="8" md="6"
//                         style={{margin:'10px 5px 5px 5px', maxWidth:'500px'}}>
//                         <Form.Control
//                             required
//                             type="text"
//                             placeholder="Enter name of item"
//                             defaultValue=""
//                             name='item'
//                             id="addItems-form"
//                         />
//                     </Form.Group>
//                     <Form.Group as={Col} sm="2" md="1"
//                         style={{margin:'10px 5px 5px 5px', maxWidth:'100px'}}>
//                         <Form.Control  name="quantity_needed" value={this.state.quantity_needed} as="select" id="addItems-form" >
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                             <option defaultValue=""></option>
//                         </Form.Control>
//                     </Form.Group>
//                 </Form.Row>
//             </Form>
//         );

//         // this.returnForm();
//     }

//     render() {
//         for(var i=0; i<this.state.num; i++) {
//             this.addForm();
//         }
//         return (
//             <body>
//                 <NavBar />
//                 <div>
//                     <div>
//                         <Link to="/home">
//                         <div class={"return_btn"}>
//                             <Image src={back_btn} roundedCircle fluid/>
//                         </div>
//                         </Link>
//                     </div>

//                     <div class="addItems">
//                         <div class="title-add" id="man">
//                             Add Items
//                         </div>
//                         <div>
//                             {this.state.form.map((item, index)=>{
//                                 return item
//                             })}
//                         </div>
//                         <div>
//                             <Button variant="info" onClick={() => this.setState({ num: 1})}>
//                                 Add more
//                             </Button>
//                         </div>
//                         <div class="addManually" id="final-add">
//                           <Link to="/shopping-list">
//                             <Button variant="info" size="lg" block onClick={() => this.sendListToDB()}>
//                                 Add to List
//                             </Button>
//                           </Link>
//                         </div>
//                     </div>


//                 </div>

//             </body>
//         );
//     }
// }

export default AddToList;
