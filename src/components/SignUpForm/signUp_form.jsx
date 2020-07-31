import React from "react";
import ReactDOM from 'react-dom';
import "./signUp_form.css";

function SignUpForm() {
   
    return ( <div className="signUp_wrapper">
               <div className="signUp_form">
                  <input type="text" className="form__email" placeholder="email" />
                  <input type="password" className="form__password" placeholder="password" />
                  <a href="" className="forgot_password">
                     forgot a password?
               </a>
                  <button className="form__logIn_btn">Log in</button>
                  <a href="" className="form__signUp_btn">
                     Sign up
                  </a>
               </div>
              </div> 
   )}
export default SignUpForm;