/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{["home", "about", "work", "skills", "testimonials", "contact"].map(
				(item, index) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<a
							href={`#${item}`}
							key={item + index}
							className="app__navigation-dot"
							style={
								active === item
									? { backgroundColor: "#313BAC0" }
									: {}
							}
						></a>
					</li>
				)
			)}
		</div>
	);
};

export default NavigationDots;
