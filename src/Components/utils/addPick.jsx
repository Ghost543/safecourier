import React from 'react'
import Joi from "joi-browser"
import Form from '../Forms/forms';
import { addPickUp } from '../../services/parcels';

class PickUpForm extends Form {
    state = {
        data: {
            pickRegion: "",
            pickLat: "",
            pickLng: ""
        },
        errors:{}
    }
    schema = {
        pickRegion: Joi.string().required().label("Pick up Region"),
        pickLat: Joi.number().label("Latitude"),
        pickLng: Joi.number().label("Longtitude")
    }
    doSubmit = async() => {
        const data = this.state.data
        await addPickUp(this.props.match.params.id,data)
        this.props.history.push(`/parcel/${this.props.match.params.id}`)
    }
    render() { 
        return ( 
            <div className="container my-sm-5 p-5 w-50" style={{border:1,backgroundColor:'#cbd4e7'}}>
                <h3 className="text-center text-primary">
                    <i className="bi bi-geo-fill me-2"></i>
                    Add pick up location
                </h3>
                <form onSubmit={this.handleSubmit} className="mt-5 flex-md-column">
                    <div className="mb-3">
                            {this.renderInput("pickRegion","Pick up Region","text")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("pickLat","Latitude","number")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("pickLng","Longtitude","number")}
                    </div>
                    {this.renderButton("Add Location")}
                </form>
            </div>
         );
    }
}
 
export default PickUpForm;