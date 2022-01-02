import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from 'react-router-dom';
import style from "../../components/common/FormsControls/FormsControls.module.css"
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const loginForm = ({handleSubmit, error}) => {
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    {createField("Email", "email", [required], Input)}
                    {createField("password", "password", [required], Input, {type: "password"})}
                    {createField(null, "rememberMe", null, Input, {type: "checkbox"}, 'rememberMe')}
                </div>

                {error && <div className={style.formSummaryError}>
                    {error}
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