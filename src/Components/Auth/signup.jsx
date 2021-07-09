import React from 'react'
import Joi from "joi-browser"
import {Link} from 'react-router-dom'
import Form from '../Forms/forms';
import { signup } from '../../services/userService';
import { toast } from 'react-toastify';

class SignupForm extends Form {
    state = {
        data: {
            fullname: "",
            email: "",
            telephone: "",
            password: ""
        },
        errors:{}
    }
    schema = {
        fullname:Joi.string().required().label("Full Name"),
        email:Joi.string().required().email().label("Email"),
        telephone: Joi.string().required().label("Telephone Number"),
        password: Joi.string().required().min(8).label("Password")
    }  
    doSubmit = async () => {
        try {
            const response = await signup(this.state.data)
            localStorage.setItem("token",response.headers['x-auth-token'])
            toast.success(`Successfully registered ${response.data.email}`)
            window.location = `/`
            
        }catch (ex) {
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
            <div className="container my-sm-5 p-5 w-60" style={{border:1,backgroundColor:'#cbd4e7'}}>
                <h3 className="text-center text-primary">
                    <i className="bi bi-person-plus-fill me-2"></i>
                    Signup
                </h3>
                <form onSubmit={this.handleSubmit} className="mt-5 flex-md-column">
                    <div className="mb-3">
                        {this.renderInput("fullname","Full Name","text")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("email","Email address","email")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("telephone","Telephone Number","tel")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("password","Password","password")}
                    </div>
                    {this.renderButton("Signup")}
                    <Link to="/login" className="px-3"><small><p className="d-none d-md-inline">Already have an account </p><strong>Login</strong></small></Link>
                </form>
            </div>
         );
    }
}
 
export default SignupForm;