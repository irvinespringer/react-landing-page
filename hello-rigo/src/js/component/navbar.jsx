import React from "react";

import PropTypes from "prop-types";

//nav bar bootstrap component
const Nav = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div>
				<a className="navbar-brand" href="#">
					<img
						src="http://marxholdings.com/images/FE-04.png"
						width="250"
						height="25"
					/>
				</a>
			</div>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div
				className=" collapse navbar-collapse"
				id="navbarSupportedContent ">
				<ul className="nav navbar-nav ml-auto">
					<li className="nav-item nav-link active" href="#">
						{props.navlink1}
					</li>
					<li className="nav-item nav-link " href="#">
						{props.navlink2}
					</li>
					<li className="nav-item nav-link" href="#">
						{props.navlink3}
					</li>
					<li className="nav-item nav-link " href="#">
						{props.navlink4}
					</li>
				</ul>
			</div>
		</nav>
	);
};

Nav.propTypes = {
	mybrand: PropTypes.string,
	navlink1: PropTypes.string,
	navlink2: PropTypes.string,
	navlink3: PropTypes.string,
	navlink4: PropTypes.string
};

export default Nav;
