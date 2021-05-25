import React, { Component } from 'react'

class Navbar extends Component {
	state = {  }
	render() { 
		return (
			<nav className="navbar navbar-inverse navbar-expand-lg bg-dark">
				<div className="container">
					<div className="navbar-translate">
						<a className="navbar-brand" href="#0">Movie DB</a>
					</div>

					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a href="#pablo" className="nav-link">
									Trending
								</a>
							</li>
							<li className="nav-item">
								<a href="#pablo" className="nav-link">
									Wishlist
								</a>
							</li>
							<li className="nav-item">
								<a href="#pablo" className="nav-link">
									Sign Out
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
 
export default Navbar