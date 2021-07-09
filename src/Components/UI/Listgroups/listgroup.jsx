import React from 'react'

const ListGroups = ({items,onItemSelect,selectedStatus}) => {
    return ( 
        <ul className="list-group ">
            {items.map(item => (
                <li onClick={() => onItemSelect(item)} key={item} className={item === selectedStatus ? "list-group-item d-flex justify-content-between align-items-center active" : "list-group-item d-flex justify-content-between align-items-center"}>
                    {item}
                    {/* <span class="badge bg-primary rounded-pill">{itemsCount}</span> */}
                </li>
            ))}
            <div className="b-example-divider"></div>
        </ul>
     );
}
 
export default ListGroups; 