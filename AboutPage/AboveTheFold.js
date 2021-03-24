import React from 'react';

export default function AboveTheFold(props) {
	return (
		<div className="red" id="above_the_fold">
			<h1>Block Crusher</h1>
			<button type="button" onClick={() => props.setGameState('playing')}>
				Click here to start
			</button>
		</div>
	);
}
