import React from 'react'
import {Link} from 'react-router-dom'
import Joi from "joi-browser"
import jwtDecoder from 'jwt-decode'
import { toast } from 'react-toastify';
import Form from '../Forms/forms';
import { login } from '../../services/loginServices';

class LoginForm extends Form {
    state = {
        data: {
            email: "",
            password: ""
        },
        errors:{}
    }
    schema = {
        email:Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(8).label("Password")
    }
    doSubmit = async () => {
        try {
            const {data: jwt} = await login(this.state.data)
            localStorage.setItem('token',jwt)
            const user = jwtDecoder(jwt)
            if (user.isAdmin === true) {
                toast.success(`Succefully logged in as ${user.email}`)
                return window.location = "/admin"
            }
            toast.success(`Succefully logged in as ${user.email}`)
            window.location = `/`
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors}
                errors.email = ex.response.data
                toast.error(ex.response.data)
                this.setState({errors:errors})
            }
        }
        
    } 
    render() { 
        return ( 
            <div className="container my-sm-5 p-5 w-50" style={{border:1,backgroundColor:'#cbd4e7'}}>
                <h3 className="text-center text-primary">
                    <i className="bi bi-person-check-fill me-2"></i>
                    Login</h3>
                <form onSubmit={this.handleSubmit} className="mt-5 flex-md-column">
                    <div className="mb-3">
                        {this.renderInput("email","Email address","email")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("password","Password","password")}
                    </div>
                    {this.renderButton("Login")}
                    <Link to="/signup" className="px-2"><small><p className="d-none d-md-inline">Have no account yet </p><strong> Create now</strong></small></Link>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;