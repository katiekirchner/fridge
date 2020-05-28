import React from "react";
import {Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom'
import "./signup_style.css";



class SignUp extends React.Component {

 render() {
  const{history} = this.props;
  return (
    <Formik
    initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        username: '',
        email: '',

    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email("Email must be valid")
        .required('Email is required'),
      name: Yup.string()
        .required("Name is required"),
      username: Yup.string()
        .required("Must have valid username"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 characters minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      confirmPassword: Yup.string()
      .required("Must confirm password")
      .test('passwords-match', 'Passwords must match', function(value) {
          return this.parent.password === value;
        })
    })}
    onSubmit={fields => {
        history.name = fields.name
        history.username = fields.username
        history.email = fields.email
        history.password = fields.password
        history.push('/signup2');
    }}
    render={({ errors, touched, values, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
      <Form className="login-form" onSubmit={handleSubmit}>
      <div class="col-md-12">
               <img class="rounded-circle z-depth-2 img profile-pic" alt="80x80" src="https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png"
               data-holder-rendered="true"/>
            </div>
            <div className="custom-file">
                  <input type="file" className="custom-file-input" />
                      <label className="custom-file-label" htmlFor="customFileLang">Add profile picture</label>
              </div>
    
    <div className="form-group">
    <label htmlFor="name" class="label-name">Name</label>
    <input
      name="name"
      type="text"
      placeholder="Enter Name"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      class="input-block"
      className={`form-control ${
      touched.name && errors.name ? "is-invalid" : ""
      }`}
        />
    <ErrorMessage
     component="div"
     name="name"
    className="invalid-feedback"
    />
     </div>

    <div className="form-group">
         <label htmlFor="username" class="label-name">Username</label>
         <input
        name="username"
        type="text"
        placeholder="Enter Username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        class="input-block"
        className={`form-control ${
             touched.username && errors.username ? "is-invalid" : ""
              }`}  />
        <ErrorMessage
          component="div"
          name="username"
          className="invalid-feedback"
         />
     </div>

     <div className="form-group">
     <label htmlFor="email" class="label-name">Email</label>
         <input
        name="email"
        type="text"
        placeholder="Enter Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`form-control ${
             touched.email && errors.email ? "is-invalid" : ""
              }`}  />
        <ErrorMessage
          component="div"
          name="email"
          className="invalid-feedback"
         />
     </div>

     <div className="form-group">
     <label htmlFor="password" class="label-name">Password</label>
         <input
        name="password"
        type="password"
        placeholder="Enter Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        class="input-block"
        className={`form-control ${
             touched.password && errors.password ? "is-invalid" : ""
              }`}  />
        <ErrorMessage
          component="div"
          name="password"
          className="invalid-feedback"
         />
     </div>

     <div className="form-group">
     <label htmlFor="password" class="label-name"> Confirm Password</label>
         <input
        name="confirmPassword"
        type="password"
        placeholder="Enter Password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        class="input-block"
        className={`form-control ${
             touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
              }`}  />
        <ErrorMessage
          component="div"
          name="confirmPassword"
          className="invalid-feedback"
         />
     </div>
    <button  
        type="submit" 
        className="btn btn-primary btn-block"
        disabled={isSubmitting}
        > {isSubmitting ? "Please wait..." : "Next"}
    </button>

      <div className="cancel-btn">

      <Link to="/Login">  
      <p class="cancel-link">Cancel </p>
      </Link>
</div>


  </Form>
    )}
/>
)

}
}

export default SignUp;
