import React, { Component } from 'react'
import TableHeader from './Table/header'

class Table extends Component {
    state = { 
        headers : []
    }
    componentDidMount() {
        this.setState({headers: ["Order Number","Order","Weight (Kg)","Owner","Status",""]})
    }
    render() { 
        return ( 
            <table className="table table-striped table-hover">
                <TableHeader heads={this.state.headers}/>
            </table>
         );
    }
}
 
export default Table;