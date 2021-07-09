import React, { Component } from 'react'
import { Route,Redirect,Switch  } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoginForm from './Components/Auth/login';
import SignupForm from './Components/Auth/signup';
import NavBar from './Components/UI/Navbar/navbar';
import AdminBoard from './Layouts/admin/dashboad';
import Home from './Layouts/Home/home';
import Logout from './Components/Auth/logout';
import Footer from './Components/footer';
import NotFound from './Layouts/notFound';
import User from './Components/utils/user'
import Parcel from './Components/utils/parcel'
import UserBoard from './Layouts/user/dashboad';
import UpdateStatus from './Components/utils/updateStatus';
import UpdatePresentLocation from './Components/utils/updateLocation';
import AddParcel from './Components/utils/newPacel';
import ParcelUser from './Components/utils/parcelUser';
import PickUpForm from './Components/utils/addPick';
import DestinationForm from './Components/utils/changeDestination';

class App extends Component {
  state = {  }
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token")
      const user = jwtDecode(jwt)
      this.setState({user:user})        
    } catch (error) {
        
    }
  
  }
  
  render() { 
    const {user} = this.state
    return ( 
      <React.Fragment>
      <ToastContainer />
      <NavBar user={user}/>
      <Switch>
        <Route path="/signup" render={props => {
          if(user) return <Redirect to="/"/>
          return <SignupForm {...props} />
        }} />
        <Route path="/login" render={props =>{
          if(user) return <Redirect to="/" />
          return <LoginForm {...props} />
        }} />
        <Route path="/logout" render={props => {
          if (!user) return <Redirect to="/login" />
          return <Logout {...props}/>
        }}/>
        <Route path="/parcel/:id/pickup" exact render={props => {
          if (!user) return <Redirect to="/login" />
          return <PickUpForm user={user} {...props}/>
        }}/>
        <Route path="/parcel/:id/destination" exact render={props => {
          if (!user) return <Redirect to="/login" />
          return <DestinationForm user={user} {...props}/>
        }}/>
        <Route path="/user/:id" exact render={props => {
            if(!user) return <Redirect to="/login" />
            return <User {...props} user={user}/>
        }}/>
        <Route path="/users/:id/parcels" render={props => {
          if(!user) return <Redirect to="/login" />
          return <UserBoard {...props} user={user}/>
        }}/>
        <Route path="/parcel/new" render={props => {
          if (!user) return <Redirect to="/login" />
          return <AddParcel user={user} {...props}/>
        }}/>
        <Route path="/parcel/:id" render={props => {
          if (!user) return <Redirect to="/login" />
          return <ParcelUser user={user} {...props}/>
        }}/>
        <Route path="/admin/users/user/:id" render={props => {
          if(!user) return <Redirect to="/login" />
          if(user.isAdmin === false) return <Redirect to="/login"/>
          return <User {...props} user={user}/>
        }}/>
        <Route path="/admin/parcel/:id/status" exact render={props => {
          if(!user) return <Redirect to="/login" />
          if(user.isAdmin === false) return <Redirect to="/login"/>
          return <UpdateStatus {...props}/>
        }}/>
        <Route path="/admin/parcel/:id/presentLocation" exact render={props => {
          if(!user) return <Redirect to="/login" />
          if(user.isAdmin === false) return <Redirect to="/login"/>
          return <UpdatePresentLocation {...props} user={user}/>
        }}/>
        <Route path="/admin/parcel/:id" exact render={props => {
          if(!user) return <Redirect to="/login" />
          if(user.isAdmin === false) return <Redirect to="/login"/>
          return <Parcel {...props} user={user}/>
        }}/>
        <Route path="/admin" render={props => {
          if(!user) return <Redirect to="/login" />
          if(user.isAdmin === false) return <Redirect to="/login"/>
          return <AdminBoard {...props}/>
        }}/>
        <Route path="/not-found" component={NotFound}/>
        <Route path="/" exact component={Home}/>
        <Redirect to="/not-found"/>
      </Switch> 
      <Footer/>
    </React.Fragment>
     );
  }
}
 
export default App;