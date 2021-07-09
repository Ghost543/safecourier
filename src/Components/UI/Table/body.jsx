import React from 'react'
import {Link} from 'react-router-dom'

const Tbody = (props) => {
    // console.log(props.data);
    return ( 
        <tbody>
            {props.data.map(ob => 
                <tr key={ob._id}>
                    <td><Link to={`${props.link}/${ob._id}`}>{ob._id}</Link></td>
                    {Object.keys(ob).splice(1).map((col,i) => <td key={col+i}>{ob[col]}</td>)}
                </tr>
            )}
        </tbody>
     );
}
 
export default Tbody;