import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../../components/Navbar/Navbar';
import back_btn from "../../components/icons/back_icon.png"
import {Image, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

import OCR from './ocrResult-undecorated';

class AddItems extends React.Component {

    state = {
        text: undefined
    }

    handleClick(e) {
        this.refs.fileUploader.click();
    }

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    choosefile = e => {

        e.preventDefault();

        const file = e.target.files[0]
        const data = new FormData()

        data.append('uploadedFile',file);   
        fetch(`http://localhost:8080/backend/ocr.${file.name.substring(file.name.lastIndexOf('\.') + 1)}`,{
            method: 'POST',
            body: data
        })
        .then(res => res.text())
        .then(t => this.setState({text: t}))

        alert('please wait for 5-20 seconds for the lagging.\nThis message is only for development.')
    }

    render() {
        return (
               this.state.text ? <OCR text = {this.state.text}/> :
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
                        <div class="title-add">
                            Add Items to Inventory
                        </div>
                        <div class="camera" onClick={this.handleClick.bind(this)}>
                            <div><input type="file" id="file" name='uploadedFile' onChange={this.choosefile} ref="fileUploader" style={{display: "none"}}/><i class="fa fa-camera-retro fa-5x"/></div>
                            <div>Scan Receipt</div>
                        </div>
                        <div class="addManually">
                            <Link to="/add-items-man">
                                <Button variant="info" size="lg" block>
                                    Add manually
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    
                </div>
                
            </body>

            
        );
    }
}

export default AddItems;