import React, { Component, Fragment } from 'react'
import Sidebar from '../../Components/sideBar/sidebar'
import Table from '../../Components/UI/tables'

class AdminBoard extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className="d-flex justify-content-between">
                    <Sidebar />
                    <Table />
                </div>
            </Fragment>
         );
    }
}
 
export default AdminBoard;