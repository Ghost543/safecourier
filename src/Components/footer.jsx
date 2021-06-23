import React from 'react'

const Footer = () => {
    return ( 
        <footer className="pt-4 my-md-5 pt-md-5 border-top bg-dark text-light">
            <div className="row">
                <div className="col-12 col-md" style={{paddingLeft:60}}>
                    <h2 className="mb-2" style={{paddingLeft:40,paddingTop:50}}><span className="text-primary">Safe</span> courier</h2>
                    <small className="d-block mb-3 text-muted" style={{paddingLeft:40}}>&copy; 2021</small>
                </div>
                <div className="col-6 col-md">
                    <h5>About us</h5>
                    <ul className="list-unstyled text-small">
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Vision: To be able to deliver parcel all over the world</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Moto: If you want watch the races, you pay from the door</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Slogan: Lets deliver good will all over the world</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Company was founded in 2021 when the need to send emergency parcels to people</p></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                    <li className="mb-1"><p className="link-secondary text-decoration-none">One Access our Api</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">For devs Opening up an account is a must and key</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Getting started with the Api as dev</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Getting started as a normal user</p></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Contacts</h5>
                    <ul className="list-unstyled text-small">
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Email: safecourier@info.com</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Tel: +256 770535612</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">Locatio: Kololo heights</p></li>
                    <li className="mb-1"><p className="link-secondary text-decoration-none">website: https://www.safecourier.com</p></li>
                    </ul>
                </div>
            </div> 
        </footer>
     );
}
 
export default Footer;