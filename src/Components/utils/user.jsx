import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import {getUser} from "../../services/parcels"

class User extends Component {
    state = { 
        user:{}
     }

     async componentDidMount() {
         try {
            const {data} = await getUser(this.props.match.params.id)
            const user = data.user
            if (!user) return this.props.history.replace("/not-found")
           
           const saveUser = {
                _id: user._id,
               email: user.email,
               name: user.name,
               contact: user.telephonNumber
           }
           this.setState({user:saveUser})
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
                <div className="flex-md-column">
                    <div>
                        <h3 className="text-center text-primary">
                            <i className="bi bi-person-square font-weight-bolder me-2"></i>
                            User
                        </h3>
                        <div className="mt-5">
                            <h4><strong className="text-primary">Name:</strong> {this.state.user.name}</h4>
                            <h4><strong className="text-primary">Email:</strong> {this.state.user.email}</h4>
                            <h4><strong className="text-primary">Contact:</strong> {this.state.user.contact}</h4>
                        </div>
                    </div>
                    <div className="d-flex d-sm-flex-column">
                        {(this.props.user.isAdmin === false || (this.props.user._id === this.state.user._id)) ? "" : <Link to={`/users/${this.state.user._id}/parcels`} className="btn btn-primary p-2">Show Parcels</Link>}
                        <button className=" btn btn-primary p-2 ms-auto" onClick={()=>this.props.history.push("/admin")}>Go back</button>
                    </div>
                </div>                    
            </div>  
        );
    }
}
 
export default User;