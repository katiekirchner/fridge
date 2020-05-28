import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { Image } from 'react-bootstrap'
import "./signup_style.css";
import back_btn from "../../components/icons/back_icon.png"

export default class AddHousehold extends Component {
    render() {
        return (
         
         
            <form className = 'login-form'>
                <Link to="/Signup">
                <div class={"return_btn"} id="return-household">
                    <Image src={back_btn} roundedCircle fluid/>
                </div>
              </Link>

            <h4 className="title">Create a New Household</h4>
            <div className="form-group">
                <label>Household Name</label>
                <input type="text" className="form-control" placeholder="Enter Household Name" />
            </div>
            <div className="form-group">
            <label>Add User </label>
            <Link to="/home">  
            <button  type="submit" className="add-button"> + </button>
            </Link>
            </div>
            
            <Link to="/existingHousehold">  
            <button  type="submit" className="btn btn-primary btn-block">Create </button>
            </Link>


            <div className="cancel-btn">
            <Link to="/existingHousehold">  
            <h6 className = "join">Join an existing household </h6>
            </Link>
            </div>



            
     </form>
        );
    }
}

