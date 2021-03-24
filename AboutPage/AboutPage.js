import React from 'react';
import AboveTheFold from './AboveTheFold';
import Explainer from './Explainer';
import Team from './Team';

export default function AboutPage(props) {
	return (
		<div id="about_page">
			{/* <h1>About Page</h1> */}
				<AboveTheFold setGameState={props.setGameState} />
				<Explainer />
				<Team />
		</div>
	);
}
