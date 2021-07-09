import React from 'react'
import Joi from "joi-browser"
import { changeDestination, getOrder } from '../../services/parcels';
import Form from '../Forms/forms';
import { toast } from 'react-toastify';

class DestinationForm extends Form {
    state = {
        data: {
            receiverName: "",
            receiverEmail: "",
            receiverTel: "",
            destinationRegion: "",
            destinationLat: "",
            destinationLng: ""
        },
        errors:{}
    }
    schema = {
        receiverName: Joi.string().required(),
        receiverEmail: Joi.string().email(),
        receiverTel: Joi.string().min(10).max(13).required(),
        destinationRegion: Joi.string().required(),
        destinationLat: Joi.number(),
        destinationLng: Joi.number()
    }
    currentUser = JSON.parse(localStorage.getItem("user"))
    async componentDidMount() {
        const {data:parcel} = await getOrder(this.props.match.params.id)
        if (!parcel) return this.props.history.replace("/not-found")
        const data = {
            receiverName: parcel.to.recieverName,
            receiverEmail: parcel.to.reciverEmail,
            receiverTel: parcel.to.reciverTel,
            destinationRegion: parcel.to.region,
            destinationLat: parcel.to.coordinates.lat,
            destinationLng: parcel.to.coordinates.lng
        }
        this.setState({data:data})
    }
    
    doSubmit = async () => {
        try {
            const data = this.state.data
            await changeDestination(this.props.match.params.id,data)
            toast.success("Successfully changed destination")
            this.props.history.push(`/parcel/${this.props.match.params.id}`)
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                // console.log(ex.response.data);
                toast.error(ex.response.data.message)
                this.props.history.replace(`/users/${this.currentUser._id}/parcels`)
            }
            if (ex.response && ex.response.status === 401) {
                // console.log(ex.response.data);
                toast.error(ex.response.data.message)
                this.props.history.push("/")
            }
        }
        
    }
    render() { 
        return ( 
            <div className="container my-sm-5 p-5 w-50" style={{border:1,backgroundColor:'#cbd4e7'}}>
                <h3 className="text-center text-primary">
                    <i className="bi bi-exclude me-2"></i>
                    Update Destination Details
                </h3>
                <form onSubmit={this.handleSubmit} className="mt-5 flex-md-column">
                    <div className="mb-3">
                        {this.renderInput("receiverName","Reciver's Name","text")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("receiverEmail","Reciver's Email address","email")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("receiverTel","Reciever's Telephone Number","tel")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("destinationRegion","Destination Region","text")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("destinationLat","Latitude","number")}
                    </div>
                    <div className="mb-3">
                        {this.renderInput("destinationLng","Longtitude","number")}
                    </div>
                    {this.renderButton("Change")}
                </form>
            </div>
         );
    }
}
 
export default DestinationForm;