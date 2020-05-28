import React from "react";
import { Form, Image } from 'react-bootstrap'
import { Formik, ErrorMessage } from "formik"
import { Link } from 'react-router-dom'
import "./signup_style.css";
import back_btn from "../../components/icons/back_icon.png"
import * as Yup from "yup";

class SignUp2 extends React.Component {
    state = {
        signup: false,
        fail: false
    }

    async signup(name, username, email, password, birth) {
        const response = await fetch('/backend/account',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                password: password,
                birth: birth
            })
        })
        const data = await response.json();
        this.setState({signup: data})
    }

    async update(fields, actions, history) {
        await this.signup(history.name, history.username, 
            history.email, history.password, fields.birth);
        if (this.state.signup) {
            this.setState({fail: false})
            history.push('/home');
        } else {
            this.setState({fail: true})
            actions.setSubmitting(false)
        }
        console.log(this.state.signup)
    }

    render() {
        const { history } = this.props;

        return (
            <Formik
                initialValues={{
                birth: ""

                }}
                validationSchema={Yup.object().shape({
                birth: Yup.date()
                    .required("Birthdate is required")

                })}
                onSubmit={(fields, actions) => {
                    this.update(fields, actions, history)
                    //history.push('/home');
                }}


                render={({ errors, touched, values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                
                <form className='login-form' onSubmit={handleSubmit}>

                    <Link to="/Signup">
                    <div class="col-sm-4 mb-4">
                        <div class={"return_btn"}>

                        <Image src={back_btn} roundedCircle fluid />
                        </div>
                    </div>
                    </Link>

                    <h3 className="labels">Almost there...</h3>

                    <div className="form-group">
                        <label htmlFor="birth">Date of Birth</label>
                        <input type="date"
                            name="birth"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-control ${
                            touched.birth && errors.birth ? "is-invalid" : ""
                            }`} />

                        <ErrorMessage
                            component="div"
                            name="birth"
                            className="invalid-feedback"
                        />
                    </div>

                    <Form.Group class="allergy">
                        <Form.Label>Allergy</Form.Label>
                        <Form.Control as="select">
                            <option>None Selected</option>
                            <option>Shellfish</option>
                            <option>Nuts</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group class="dietary-needs">
                        <Form.Label>Dietary Needs</Form.Label>
                        <Form.Control as="select">
                            <option>None Selected</option>
                            <option>Gluten Free</option>
                            <option>Dairy Free</option>
                        </Form.Control>
                    </Form.Group>

                    <div className="form-group">
                        <label>Household</label>
                        <Link to="/addHousehold">
                            <button type="submit" className="add-button"> + </button>
                        </Link>
                    </div>

                    {!this.state.fail ? (
                        <p/>
                    ) : (
                        <p className="error-msg text-center"> Failed to create an account! </p>
                    )} 
                    <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                    >
                        Sign Up 
                    </button>

                    <div className="cancel-btn">
                    <Link to="/Login">
                        <p>Cancel </p>

                    </Link>
                    </div>

                </form>
                )}
            />
        )
    }
}

export default SignUp2;
