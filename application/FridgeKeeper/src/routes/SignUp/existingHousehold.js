import React, { Component } from "react";
import { Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import "./signup_style.css";
import back_btn from "../../components/icons/back_icon.png"
export default class ExistingHousehold extends Component {
    render() {
        return (
         
         
            <form className = 'login-form'>
                 <Link to="/addHousehold">
                <div class={"return_btn"} id="return-household">
                    <Image src={back_btn} roundedCircle fluid/>
                </div>
              </Link>

            <h3>Join an Existing Household</h3>
            <div className="form-group">
                <label>Household ID</label>
                <input type="number" className="form-control" placeholder="Enter Household ID" />
            </div>
                        
            <Link to="/SignUp2">  
            <button  type="submit" className="btn btn-primary btn-block">Join </button>
            </Link>


           


            
     </form>
        );
    }
}

