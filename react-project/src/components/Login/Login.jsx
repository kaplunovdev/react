import React from "react";
import {Field, reduxForm} from "redux-form";


const loginForm = (props) => {
    return (
        <div>

            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'login'} component={"input"} placeholder={'login'}/>
                </div>
                <div>
                    <Field name={'password'} component={"input"} placeholder={'password'}/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={"input"} type={'checkbox'} placeholder={'password'}/>remember
                    me
                </div>
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
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login