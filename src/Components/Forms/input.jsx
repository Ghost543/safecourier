import React from 'react'

const Input = ({name,label,error, ...rest}) => {
    return ( 
        <div>
            <label htmlFor={name} className="form-label">{label}</label>
            <input name={name} {...rest} className="form-control" id={name} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;