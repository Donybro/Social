import React from "react";
import "./signUp_form.css";
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../selectors/selectors";


let SignUpFormContainer =(props)=>{
    let getAuthData =(dataForm)=>{
        let {password,email,rememberMe} = dataForm;
        props.login(email,password,rememberMe);
       // API.getProfile()


    }   

    return <ReduxSignUpForm {...props}  onSubmit={getAuthData}/>
}

const SignUpForm = (props) => {
    if(props.isAuth) {
        return <Redirect to={"/Main"}/>
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="signUp_wrapper">
                <div className="signUp_form">
                    <Field component="input" name={"email"} className="form__email" placeholder="email"/>
                    <Field component="input" type={"password"} name={"password"} className="form__password" placeholder="password"/>
                    { props.error && <div className="form__error">
                                         {props.error}
                                     </div>}

                    <a href="" className="forgot_password">
                        forgot a password?
                    </a>
                    <div className="form__checkbox">
                        <Field component={"input"} type={"checkbox"} name={"rememberMe"}  /> Remember me
                    </div>
                    <button className="form__logIn_btn">Log in</button>
                    <a href="" className="form__signUp_btn">
                        Sign up
                    </a>
                </div>
            </div>
        </form>
    )
}
let mapStateToProps=(state)=>({
    isAuth: getIsAuth(state)
})
let ReduxSignUpForm =  reduxForm({form: "SignUp"})(SignUpForm);
export default  connect(mapStateToProps,{login})(SignUpFormContainer);