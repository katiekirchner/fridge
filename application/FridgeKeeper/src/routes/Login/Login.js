import React from "react";
import { Link } from 'react-router-dom'
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import {Image} from "react-bootstrap";


import lemons from "./lemons.jpg"
import "./login_style.css";


var sectionStyle = {
    width: "100%",
    height: "2000px",
    resizeMode: 'repeat',
    backgroundImage: `url(${lemons})`
};


class Login extends React.Component {
    state = {
        login: false,
        fail: false
    };


    async login(username, password) {
        localStorage.removeItem("user_id");

        const response = await fetch('/backend/user',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        const data = await response.json();
        if (data.length != 0) {
            this.setState({login: true})
            localStorage.setItem("user_id", data[0].id);
            //localStorage.setItem("login", true);
        }
    }

    async update(fields, actions, history) {
        await this.login(fields.username, fields.password)
        if (this.state.login) {
            this.setState({fail: false})
            history.push('/home');
        } else {
            this.setState({fail: true})
            actions.setSubmitting(false)
        }
        console.log(this.state.login)
    }

    createForm(){

        const{history} = this.props;

        return(
                <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                    .required("Must have valid username"),
                    password: Yup.string()
                    .required("No password provided.")
                    .min(8, "Password is too short - should be 8 characters minimum.")
                    .matches(/(?=.*[0-9])/, "Password must contain a number.")
                })}
                onSubmit={(fields, actions) => {
                    this.update(fields, actions, history);
                }}
                render={({ errors, status, touched, values, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h3 className = 'titleLogin'>FridgeKeeper</h3>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                            name="username"
                            type="text"
                            placeholder="Enter username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            class="input-block label-name"
                            className={`form-control ${
                                touched.username && errors.username ? "is-invalid" : ""
                                }`}
                            />
                            <ErrorMessage
                            component="div"
                            name="username"
                            className="invalid-feedback"
                        />
                        </div>

                        <label htmlFor="password">Password</label>
                        <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        class="input-block label-name"
                        className={`form-control ${
                            touched.password && errors.password ? "is-invalid" : ""
                            }`}
                        />
                        <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                        />

                        {!this.state.fail ? (
                            <p/>
                        ) : (
                            <p className="invalid text-center"> Invalid username/password! </p>
                        )} 
                        <button  
                        type="submit" 
                        className="btn btn-primary btn-block" 
                        disabled={isSubmitting}
                        > Login </button>
                        
                        <p className="forgot-password text-center">
                            <a href="#">Forgot password?</a>
                        </p>
                        <hr></hr>
                        <h5 className='new-user'>New User?</h5>
                        <Link to="SignUp">
                            <button type="submit" className="btn btn-primary btn-block" >Create an Account</button>
                        </Link>

                    </form>
                )}
            />
        )
    }



    render() {
   

        return (
            <div style={ sectionStyle } imageStyle={{resizeMode: 'repeat'}}>

                <div class="formhold">
                    {this.createForm()}
                </div>
             </div>

        )

    }
}

export default Login;

