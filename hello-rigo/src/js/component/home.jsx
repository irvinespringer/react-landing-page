import React from "react";

//include images into your bundle
import Nav from "./navbar.jsx";
import Jumbo from "./jumbo.jsx";
import Cards from "./cards.jsx";
import Cardlist from "./cardlist.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		title: "Website Development",
		image:
			"https://images.pexels.com/photos/545331/pexels-photo-545331.jpeg",
		content: "We build robust, powerful websites that convert",
		button: "Learn More"
	},
	{
		title: "Software Development",
		image:
			"https://images.pexels.com/photos/239898/pexels-photo-239898.jpeg",
		content: "We specialize in bespoke web enabled software",
		button: "Learn More"
	},
	{
		title: "SEO",
		image:
			"https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg",
		content:
			"We build and optimize reliable websites that attract optimal traffic",
		button: "Learn More"
	},
	{
		title: "Pay Per Click",
		image:
			"https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg",
		content:
			"Get targed traffic through pay per click ads on platform such as GoogleAdwords",
		button: "Learn More"
	}
];

//create your first component
const Home = () => {
	return (
		<div>
			<Nav
				mybrand="Final Exchange"
				navlink1="Home"
				navlink2="About"
				navlink3="Services"
				navlink4="Contact"
			/>

			<Jumbo
				title="Let's, Create!"
				content="We design, build, test and market"
				button="Learn more"
			/>

			<p />

			<Cardlist cards={cards} />

			<Footer content="Copyright © Final Exchange 2018" />
		</div>
	);
};

export default Home;
