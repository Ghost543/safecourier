import React from 'react'

const TableHeader = ({heads}) => {
    return ( 
        <thead>
            <tr>
                <th scope="col">Order Number</th>
                <th scope="col">Order</th>
                <th scope="col">Weight (Kg)</th>
                <th scope="col">Owner</th>
                <th scope="col">Status</th>
                <th scope="col"> </th>
                {/* {heads.map(head => {
                    <th scope="col">{head}</th>
                })} */}
            </tr>
        </thead>
    );
}
 
export default TableHeader;