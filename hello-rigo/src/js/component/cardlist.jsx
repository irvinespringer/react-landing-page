import React from "react";

//include images into your bundle
import PropTypes from "prop-types";
import Cards from "./cards.jsx";

//card bootstrap component

const Cardlist = props => {
	const cards = props.cards;
	const listitems = cards.map(x => (
		<Cards
			key={x.title}
			title={x.title}
			image={x.image}
			content={x.content}
			button={x.button}
		/>
	));

	return (
		<div className="container">
			<div className="row text-center">{listitems}</div>
		</div>
	);
};

Cardlist.propTypes = {
	cards: PropTypes.array
};

export default Cardlist;
