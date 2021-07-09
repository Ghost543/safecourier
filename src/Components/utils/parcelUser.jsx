import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getOrder} from "../../services/parcels"

class ParcelUser extends Component {
    state = { 
        order: {},
        owner: {},
        pick: {},
        presentLocation: {}
     }

     async componentDidMount() {
         const orderId = this.props.match.params.id
         const {data: order} = await getOrder(orderId)
         if (!order) return this.props.history.replace("/not-found")
         const saveOrder = {
            _id: order._id,
            parcelType: order.parcelType,
            parcelWeight: order.parcelWeight,
            status:order.status,
            receiverName: order.to.recieverName,
            receiverEmail: order.to.reciverEmail,
            receiverTel: order.to.reciverTel,
            destinationRegion: order.to.region,
         }
         const saveOwner = {
             _id: order.ownerId,
            email: order.ownerEmail,
            name: order.ownerName,
            contact: order.ownerTelephoneNumber
         }
         if (order.from) {
            let savePick = {
                region: order.from.region,
                lat: order.from.cordinates.lat,
                lng: order.from.cordinates.lng
             }
             if (!order.presentLocation.region) {
                this.setState({order: saveOrder,owner:saveOwner,pick:savePick,presentLocation:{region:""}})
             }
             let savePresentLocation = {
                 region: order.presentLocation.region,
                 lat: order.presentLocation.coordinates.lat,
                 lng: order.presentLocation.coordinates.lng
             }
             
             this.setState({order: saveOrder,owner:saveOwner,pick:savePick,presentLocation:savePresentLocation})
         }
         
         if (!order.from) {
            if (!order.presentLocation.region) {
                this.setState({order: saveOrder,owner:saveOwner,pick:{region:""},presentLocation:{region:""}})
            }
            let savePresentLocation = {
                region: order.presentLocation.region,
                lat: order.presentLocation.coordinates.lat,
                lng: order.presentLocation.coordinates.lng
            }
            this.setState({order: saveOrder,owner:saveOwner,pick:{region:"",presentLocation:savePresentLocation}})
         }
     }
     
    render() { 
        const {user} = this.props
        return ( 
            <div className="container my-sm-5 p-5 w-1000" style={{border:1,backgroundColor:'#cbd4e7'}}>
                <h3 className="text-center text-primary">
                    <i className="bi bi-envelope-fill font-weight-bolder me-2"></i>
                    Parcel Order
                </h3>
                <div className="d-flex justify-content-around mt-5">
                    <div className="flex-md-column">
                        <h3 className="text-primary">Parcel</h3>
                        <h4>Parcel Number: </h4>
                        <h4 className="px-3">{this.state.order._id}</h4>
                        <h4>Parcel: {this.state.order.parcelType} </h4>
                        <h4>Weight: {this.state.order.parcelWeight}</h4>

                        <h3 className="text-primary">Pick Up</h3>
                        {this.state.pick.region === "" ? <Link to={`/parcel/${this.state.order._id}/pickup`} className="btn btn-info">Add pickUp Location</Link> : <h4>Region: {this.state.pick.region}</h4>}
                    </div>
                    <div className="flex-md-column mt-3">
                        <h4>Status: {this.state.order.status}</h4>
                        <h3 className="text-primary">Present Location</h3>
                        {this.state.presentLocation.region === "" ? "Yet to be Updated" : <h4>Region: {this.state.presentLocation.region}</h4>}

                        <h3 className="text-primary">Destination</h3>
                        <h4>Reciever Name: {this.state.order.receiverName}</h4>
                        <h4>Reciever Email: {this.state.order.receiverEmail}</h4>
                        <h4>Reciever Contact: {this.state.order.receiverTel}</h4>
                        <h4>Region: {this.state.order.destinationRegion}</h4>
                    </div>
                    <div className="d-flex flex-column">
                        <div>
                            {(this.state.order.status ==="canceled" || this.state.order.status==="delivered") ? "" : <Link to={`/parcel/${this.state.order._id}/destination`} className="btn btn-info">Change destination</Link>}
                        </div>
                        <div className="mt-auto">
                            <button className="btn btn-primary" onClick={()=>this.props.history.push(`/users/${user._id}/parcels`)}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
 
export default ParcelUser;
