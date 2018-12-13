import React from "react";

//include images into your bundle

import PropTypes from "prop-types";

//jumbotron bootstrap component
const Footer = props => {
	return (
		<div className="container mt-3">
			<div className="jumbotron">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">{props.content}</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						{props.button}
					</a>
				</p>
			</div>
		</div>
	);
};

Footer.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	button: PropTypes.string
};

export default Footer;
