import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from 'react-router-dom';
import style from "../../components/common/FormsControls/FormsControls.module.css"


const loginForm = (props) => {
    return (
        <div>

            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'} component={"input"} placeholder={'email'}/>
                </div>
                <div>
                    <Field name={'password'} component={"input"} placeholder={'password'} type={'password'}/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={"input"} type={'checkbox'} placeholder={'password'}/>remember
                    me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}

                <button type={"submit"}>Login</button>
            </form>
        </div>

    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(loginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)