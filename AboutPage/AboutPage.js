import React from 'react';
import AboveTheFold from './AboveTheFold';
import Explainer from './Explainer';
import Team from './Team';

export default function AboutPage(props) {
	return (
		<div id="about_page">
			<AboveTheFold setGameState={props.setGameState} />
			<Explainer />
			<Team />
            <p>
					Shoutout and link to Mintbean's homepage - This helps us grow the
					community!
				</p>
		</div>
	);
}
