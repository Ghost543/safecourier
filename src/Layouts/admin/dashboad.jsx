import React, { Component, Fragment } from 'react'
import Sidebar from '../../Components/sideBar/sidebar'
import Table from '../../Components/UI/tables'
import Users from './users'

import {pagination} from '../../utils/pagination'

import {getOrders} from "../../services/parcels"

class AdminBoard extends Component {
    state = { 
        data:[],
        items: [],
        headers:[],
        currentPage: 1,
        pageSize: 6,
        selectedItem: "parcel",
        selectedStatus: "All Parcels"
     }
    
    async componentDidMount() {
        let data = await getOrders()
        data = this.dataFormate(data.data.parcel)
        const headers = ["Parce Id","Parcel","Weight (Kg)","Sender","Reciever","Destination","Status"]
        const titles = [{id:"parcel",icon: "list-stars",label: "Parcel Delivery Orders",titles: ["All Parcels","pending","inprocess","delivered","canceled"],link:"/admin/parcels"},{id:"user",icon: "people-fill",label: "Users",link:"/admin/users",titles: []}]
        this.setState({items: titles,headers: headers,data:data})
    }
    dataFormate = (data) => {
        const data_ = []    
        data.forEach(element => {
            let ob = {
                _id : element._id,
                parcelType: element.parcelType,
                parcelWeight: element.parcelWeight,
                owner: element.owner.name,
                recieverName: element.destination.recieverName,
                region: element.destination.region,
                status: element.status
            }
            data_.push(ob)
        });
        return data_
    }
    selectedHandler = (item) => {
        this.setState({selectedItem: item})
    }
    selectedStatusHandler = (status) => {
        this.setState({selectedStatus: status,currentPage: 1})
    }
    pageChangeHandler = (page) => {
        this.setState({currentPage:page})
    }
    render() { 
        let { items,selectedItem,data,headers,selectedStatus,pageSize,currentPage } = this.state
        const filtered = selectedStatus !== "All Parcels" ? data.filter(d => d.status === selectedStatus) : data
        data = pagination(filtered,currentPage,pageSize)
        const disp = selectedItem === "user" ? <Users /> :<Table className="py-5" 
                                                                headers={headers} 
                                                                data={data} 
                                                                itemsCount={filtered.length}
                                                                pageSize={pageSize} 
                                                                currentPage={currentPage}
                                                                link={`/admin/parcel`}
                                                                onPageChange={this.pageChangeHandler}  
                                                                />
        return ( 
            <Fragment>
                <div className="d-flex">
                    <Sidebar items={items} onItemSelected={this.selectedHandler} selectedItem={selectedItem} onStatusSelect={this.selectedStatusHandler}/>
                    {disp}
                </div>
            </Fragment>
         );
    }
}
 
export default AdminBoard;