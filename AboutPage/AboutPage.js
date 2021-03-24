import React from 'react';
import AboveTheFold from './AboveTheFold';
import Explainer from './Explainer';
import MintBeanShoutout from './MintBeanShoutout';
import Team from './Team';

export default function AboutPage(props) {
	return (
		<div id="about_page">
			<AboveTheFold setGameState={props.setGameState} />
			<Explainer />
			<Team />
            <MintBeanShoutout />
		</div>
	);
}
