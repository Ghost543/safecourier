import React from 'react'
import Joi from "joi-browser"
import Form from '../Forms/forms';
import { updatePresentLocation } from '../../services/parcels';
import { toast } from 'react-toastify';

class UpdatePresentLocation extends Form {
    state = {
        data: {
            presentRegion: "",
            presentLat: "",
            presentLng: ""
        },
        errors:{}
    }
    schema = {
        presentRegion: Joi.string().required().label("Present Region"),
        presentLat: Joi.number().label("Latitude"),
        presentLng: Joi.number().label("Longtitude")
    }
    doSubmit = async() => {
        try {
            const data = this.state.data
            await updatePresentLocation(this.props.match.params.id,data)
            toast.success(`Successfully update the current location for ${this.props.match.params.id}` )
            this.props.history.push(`/admin/parcel/${this.props.match.params.id}`)
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                // console.log(ex.response.data);
                toast.error(ex.response.data.message)
            }
            if (ex.response && ex.response.status === 401) {
                // console.log(ex.response.data);
                toast.error(ex.response.data.message)
            }
        }
        
    }
    render() { 
        return ( 
            <div className="container my-sm-5 p-5 w-50" style={{border:1,backgroundColor:'#cbd4e7'}}>
                <h3 className="text-center text-primary">
                    <i className="bi bi-geo-fill me-2"></i>
                    Update Present Location For Parcel
                </h3>
                <form onSubmit={this.handleSubmit} className="mt-5 flex-md-column">
                    <div className="mb-3">
                            {this.renderInput("presentRegion","Present Region","text")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("presentLat","Latitude","number")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("presentLng","Longtitude","number")}
                    </div>
                    <div className="mt-3">                     
                        {this.renderButton("Update Present Location")}
                    </div>
                </form>
            </div>
         );
    }
}
 
export default UpdatePresentLocation;