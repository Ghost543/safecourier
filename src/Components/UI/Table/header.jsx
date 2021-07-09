import React from 'react'

const TableHeader = ({heads}) => {
    return ( 
        <thead>
            <tr>
                {heads.map((head,i) => (<th key={head+i} scope="col">{head}</th>))}
            </tr>
        </thead>
    );
}
 
export default TableHeader;