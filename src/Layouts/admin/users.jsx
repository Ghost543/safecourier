import React, { Component } from 'react'

import Table from '../../Components/UI/tables';

import {pagination} from '../../utils/pagination'

import { getUsers } from '../../services/parcels';

class Users extends Component {
    state = { 
        data: [],
        headers: [],
        currentPage: 1,
        pageSize: 5
     }
    async componentDidMount() {
        const headers = ["User Id", "Full Name", "Email Address", "Telephone Number"]
        let data = await getUsers()
        data = this.dataFormate(data.data.users)
        this.setState({data: data,headers:headers})
    }

    dataFormate = data => {
        const data_ = []
        data.forEach(element => {
            const ob = {
                _id: element._id,
                name: element.name,
                email: element.email,
                telephonNumber: element.telephonNumber
            }
            data_.push(ob)
        });
        return data_
    }
    pageChangeHandler = page => {
        this.setState({currentPage:page})
    }
    
    render() {
        let {data,headers,currentPage,pageSize} = this.state
        const count = data.length
        data = pagination(data,currentPage,pageSize)
        return (
            <Table 
                headers={headers} 
                data={data} 
                itemsCount={count}
                pageSize={pageSize} 
                currentPage={currentPage}
                link={`/admin/users/user`}
                onPageChange={this.pageChangeHandler}
            />
         );
    }
}
 
export default Users;