import React from 'react'

import img from '../../img/showcase.svg'

const ShowCase = () => {
    return ( 
        <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div style={{paddingRight: 50}}>
                        <h2><span className="text-primary">Courier </span>Quotes</h2>
                        <p className="lead my-4">
                            Our estimed client we would what to help know or atleast help you estimate how much or the effluence of your parcel weight to the price or much needed. Not to forget also the distance between the locations
                        </p>
                        <button className="btn btn-primary btn-lg">Get Started</button>
                    </div>
                    <img className="img-fluid w-50 d-none d-sm-block" src={img} alt="show case"/>
                </div>
            </div>
        </section>
     );
}
 
export default ShowCase;