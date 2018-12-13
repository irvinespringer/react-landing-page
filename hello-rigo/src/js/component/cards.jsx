import React from "react";

//include images into your bundle
import PropTypes from "prop-types";

//card bootstrap component
const Cards = props => {
	return (
		<div className="col-3">
			<div className=" ">
				<img
					className="card-img-top"
					src={props.image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.content}</p>
					<a href="#" className="btn btn-primary">
						{props.button}
					</a>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	content: PropTypes.string,
	button: PropTypes.string
};

export default Cards;
