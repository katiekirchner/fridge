import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home_style.css'

import img from "./bag.png"

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
        apiKey: "7951f9bdd70e4fea9e5f62eed05f1f4a",
        user_id: localStorage.getItem("user_id"),
        item: {id: null, name: "", quantity: 0, exp: "", img_id: ""},
        num: 0,
        list: [],
        addItems: [],
        testItem: 0
    }

    async sendListToDB() {
        console.log("List: ", this.state.list);

      const response = await fetch('/backend/item',
      {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              user_id: this.state.user_id,
              list: this.state.list
          })
      })
      .then(res => res.text())
      .then(rs => console.log(rs))

      console.log(response);

    }

    async searchItem() {
        const url = "https://api.spoonacular.com/food/products/search?apiKey=" 
                        + this.state.apiKey + "&query=" + this.state.search + "&number=50";
        const response = await fetch(url);
        const data = await response.json();

        console.log("heree" , data.products[3])

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


        this.state.list[listItem].img_id =itemAdded.image;
        
        
        // push({id: null, name: this.state.search, quantity: 1, exp: null, img_id: itemAdded.image});

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
                        Add Item
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
        this.state.list.push({name: "", quantity: 1, exp: null, img_id: ""})
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
                            {this.state.list[(e.target.id == '') ? 0 :  e.target.id].quantity = e.target.value}

                        }

                        // onChange={e => this.state.items[e.target.id].quantity = e.target.value}
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
                    <Form.Group   as={Col} sm="5" md="4"
                           onChange={e => 
                            {this.state.list[(e.target.id == '') ? 0 :  e.target.id].exp = e.target.value}

                        }
                        // onChange={e => this.state.items[e.target.id].exp = e.target.value}
                        style={{margin:'10px 5px 5px 5px', maxWidth:'330px', minWidth:'300px'}}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Exp</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" id={this.state.num}></Form.Control>
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
                        <p> Press enter to browse item options </p>
                        <br></br>
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
                                {/* <Button variant="info" size="lg" block onClick={() => this.sendListToDB()}>
                                    Add to Inventory
                                </Button> */}
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

                    <div class="gImage">
                            <Image src={img} />
                    </div>
                </div>
               
            </body>
        );
    }
}

// function MyVerticallyCenteredModal(props) {

//     function test(){
//         console.log("Index: ", index);
//         console.log("Props: ", props);

//         const recipeName = document.getElementById("card");
//         console.log("Test get: ", recipeName);

//     }



//   let index = 0;
//   const handleSelect = (e) => {
//     index++;
//     console.log("Index!!: ", index);
//   };

//     return (
//         <Modal
//             show={props.show}
//             onHide={props.onHide}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter"
//                     style={{fontFamily:'Concert One, cursive', fontSize:'25px', margin:'auto', paddingLeft:'40px'}}>
//                     Add Item
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body style={{fontFamily:'Concert One, cursive', fontSize:'20px'}}>
//                 <Carousel slide={false} interval={false} indicators={false} >
//                     {props.searchItems.map((item, index) => {
//                         return (
//                         !item ? (
//                             <Carousel.Item/>
//                         ) : (
//                             <Carousel.Item>
//                                 <Card id = "card">
//                                     <Card.Img variant="top" src={item.image} style={{maxWidth:'auto', height:'300px', objectFit:'contain'}}/>
//                                     <Card.Body>
//                                         <Card.Title>{item.title}</Card.Title>
//                                     </Card.Body>
//                                 </Card>
//                             </Carousel.Item>

//                         ))
//                     })}
//                 </Carousel>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="info" size="lg" onClick={() => test()}> Choose </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }
// onClick={props.onHide}

export default AddItemsMan;