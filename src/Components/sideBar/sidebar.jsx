import React from 'react'

const Sidebar = () => {
    return ( 
        <main>
			<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width:280,paddingBottom: 100}}>
			    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
			      <span className="fs-4"><span className="text-primary">Safe</span> Courier</span>
			    </a>
			    <hr/>
			    <ul className="nav nav-pills flex-column mb-auto">
			      <li>
			        <a href="#" className="nav-link active text-white collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
					<i className="bi bi-speedometer2 me-2" ></i>
			          Dashboard
			        </a>
			        <div className="collapse" id="dashboard-collapse">
			          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
			            <li><a href="#" className="link-white rounded">Overview</a></li>
			            <li><a href="#" className="link-white rounded">Weekly</a></li>
			            <li><a href="#" className="link-white rounded">Monthly</a></li>
			            <li><a href="#" className="link-white rounded">Annually</a></li>
			          </ul>
			        </div>
			      </li>
			      <li>
			        <a href="#" className="nav-link text-white collapsed" data-bs-toggle="collapse" data-bs-target="#parsel-collapse" aria-expanded="false">

			          Parcel Delivery Orders
			        </a>
			        <div className="collapse" id="parsel-collapse">
			          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
			            <li><a href="#" className="link-white rounded">Pending...</a></li>
			            <li><a href="#" className="link-white rounded">Inprocess</a></li>
			            <li><a href="#" className="link-white rounded">Delivered</a></li>
			            <li><a href="#" className="link-white rounded">Canceled</a></li>
			          </ul>
			        </div>
			      </li>
			      <li>
			        <a href="#" className="nav-link text-white">
			          Users
			        </a>
			      </li>
			    </ul>
			    <hr/>
			  </div>
			  <div className="b-example-divider"></div>
		</main>
     );
}
 
export default Sidebar;