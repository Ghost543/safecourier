import React,{Component} from 'react'
import { Link } from 'react-router-dom';

class Sidebar extends Component {
	state = {  }
	render() { 
		const {items,onItemSelected,selectedItem,onStatusSelect} = this.props
		return ( 
			<main>
			<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
			    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
			      <span className="fs-4"><span className="text-primary">Safe</span> Courier</span>
			    </Link>
			    <hr/>
					<ul className="nav nav-pills flex-column mb-auto" >
						{items.map(item => (
							<li onClick={() => onItemSelected(item.id)} key={item.id}>
								<a href="#" className={item.id === selectedItem ? "nav-link text-white collapsed active px-5" : "nav-link text-white collapsed px-5"} data-bs-toggle="collapse" data-bs-target={`#${item.id}`}>
								<i className={`bi bi-${item.icon} me-2`}></i>
								{item.label}
								</a>
								<div className="collapse " id={item.id}>
									<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small align-items-center justify-content-between">
										{item.titles.map((title,i)=><li key={title+i} onClick={()=> onStatusSelect(title)}><a href="#" className="link-white rounded">{title.toUpperCase()}</a></li>)}					
									</ul>
								</div>
							</li>
						))}
					</ul>
			    <hr/>
			  </div>
			  <div className="b-example-divider"></div>
		</main>
		 );
	}
}
 
export default Sidebar;
