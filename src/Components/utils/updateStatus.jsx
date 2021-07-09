import React from 'react'
import Joi from "joi-browser"
import Form from '../Forms/forms';
import { updateParcelStatus } from '../../services/parcels';
import { toast } from 'react-toastify';

class UpdateStatus extends Form {
    state = {
        data: {
            status: "",
        },
        errors:{}
    }
    schema = {
        status: Joi.string().required().label("Status")
    }
    doSubmit = async() => {
        try {
            const data = this.state.data
            await updateParcelStatus(this.props.match.params.id,data)
            toast.success(`Succefully updated the status of ${this.props.match.params.id}`)
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
                    <i className="bi bi-stack me-2"></i>
                    Update Parcel Status
                </h3>
                <form onSubmit={this.handleSubmit} className="mt-5 flex-md-column">
                    <div className="mb-3">
                        {this.renderInput("status","Parcel Status","text")}
                    </div>
                    {this.renderButton("Update Status")}
                </form>
            </div>
         );
    }
}
 
export default UpdateStatus;