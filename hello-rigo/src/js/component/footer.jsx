import React from "react";

//include images into your bundle

import PropTypes from "prop-types";

//jumbotron bootstrap component
const Footer = props => {
	return (
		<footer className="page-footer font-small blue .bg-dark footer">
			<div className="footer-copyright text-center py-3">
				{props.content}
			</div>
		</footer>
	);
};

Footer.propTypes = {
	content: PropTypes.string
};

export default Footer;
