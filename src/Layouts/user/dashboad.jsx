import React, { Component } from 'react'
import {pagination} from "../../utils/pagination"
import ListGroups from '../../Components/UI/Listgroups/listgroup'
import { Link } from 'react-router-dom'
import { getUserParcels,cancelOrder } from '../../services/parcels'
import { toast } from 'react-toastify'
import Table from '../../Components/UI/tables'

class UserBoard extends Component {
    state = { 
        headers:[],
        parcels: [],
        currentPage: 1,
        pageSize: 4,
        status: [],
        selectedStatus: "All parcels"
     }
     async componentDidMount() {
         try {
            const headers = ["Parce Id","Parcel","Weight (Kg)","Reciever","Destination","Status",""]
            const response = await getUserParcels(this.props.match.params.id)
            this.setState({parcels: this.dataFormate(response.data.orders),headers:headers,status: ["All parcels","pending","inprocess","delivered","canceled"]})
         } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                // console.log(ex.response.data);
                toast.error(ex.response.data.message)
            }
            if (ex.response && ex.response.status === 401) {
                // console.log(ex.response.data);
                toast.error(ex.response.data.message)
            }
            if (ex.response && ex.response.status === 404) {
                // console.log(ex.response.data);
                toast.error(ex.response.data.message)
            }
         }
         
     }
     dataFormate = data => {
        const data_ = []
        data.forEach(element => {
            const ob ={
                _id : element._id,
                parcelType: element.parcelType,
                parcelWeight: element.parcelWeight,
                recieverName: element.destination.recieverName,
                region: element.destination.region,
                status: element.status,
                cancel: (element.status === "canceled"||element.status ==="delivered") ? "" : <button onClick={()=>this.orderCancelHandler(element._id)} type="button" className="btn btn-danger">Cancel</button>
            }
            data_.push(ob)
        });
        return data_
     }
     singleDataFormate = element => {
         const ob = {
            _id : element._id,
            parcelType: element.parcelType,
            parcelWeight: element.parcelWeight,
            recieverName: element.destination.recieverName,
            region: element.destination.region,
            status: element.status,
            cancel: ""
         }
         return ob
     }
     pageChangeHandler = (page) => {
        this.setState({currentPage:page})
    }
    statusChangeHandler = (item) => {
        this.setState({selectedStatus: item, currentPage:1})
    }
    orderCancelHandler = async (id) => {
        try {                
                let parcelCopy = [...this.state.parcels]
                let index = parcelCopy.findIndex(order => order._id === id)
                
                let parcel = await cancelOrder(id)
                parcel = this.singleDataFormate(parcel.data.data);
                parcelCopy.splice(index,1,parcel)
                this.setState({parcels:parcelCopy})
                toast.success(`Successfully canceled parce ${id}`)
            
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error(ex.response.data.message)
            }
            if (ex.response && ex.response.status === 404) {
                toast.error(ex.response.data.message)
                this.props.history.push('/not-found')
            }
        }
    }

    render() { 
        let {parcels, pageSize,currentPage,selectedStatus,headers}= this.state
        const filtered = selectedStatus !=="All parcels" ? parcels.filter(o => o.status === selectedStatus) : parcels
        parcels = pagination(filtered,currentPage,pageSize) 
        return ( 
            <div>         
                <div className="container m-5 row">
                    <div className="col-3" >
                        <ListGroups 
                            items={this.state.status}
                            onItemSelect={this.statusChangeHandler}
                            selectedStatus={selectedStatus}
                        /> 
                    </div>
                    <div className="col">
                        <Link to="/parcel/new" className="btn btn-primary">
                            <i className="bi bi-plus-square me-2"></i>
                            Add New Parcel
                        </Link>
                        <div>
                            <Table 
                                headers={headers} 
                                data={parcels} 
                                itemsCount={filtered.length}
                                pageSize={pageSize} 
                                currentPage={currentPage}
                                link={`/parcel`}
                                onPageChange={this.pageChangeHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UserBoard;