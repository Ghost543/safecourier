import  React, { Component } from 'react'

class Logout extends Component {
    componentDidMount() {
        localStorage.removeItem("token")
        window.location = "/"
    }
    
    render() { 
        return <div>
            <div className="b-example-divider"></div>
        </div>
    }
}
 
export default Logout;