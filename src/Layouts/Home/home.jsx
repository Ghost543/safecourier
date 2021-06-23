import React, { Fragment } from 'react'
import ShowCase from '../../Components/UI/showCase'
import Footer from '../../Components/footer'
import HomeCards from '../../Components/UI/homeCards';

const Home = () => {
    return ( 
        <Fragment>
            <ShowCase />
            <HomeCards />
            <Footer />
        </Fragment>
     );
}
 
export default Home;