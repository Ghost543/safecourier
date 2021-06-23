import React, { Component } from 'react'
import { Route,Redirect,Switch  } from 'react-router-dom';
import NavBar from './Components/UI/Navbar/navbar';
import AdminBoard from './Layouts/admin/dashboad';
import Home from './Layouts/Home/home';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/admin" component={AdminBoard} />
        <Route path="/" component={Home}/>
      </Switch> 
    </React.Fragment>
  );
}

export default App;
