import React from 'react';

export default function AboveTheFold(props) {
	return (
		// <div><div>
		// 	<p>Above the Fold</p>
		// 	<p>
		// 		The most important part of the homepage is what users see when they
		// 		visit your homepage for the first time. This is called the "Above the
		// 		Fold" or "ATF" panel. Your Above the Fold should have the following:
		// 	</p>

		// 	<p>The title of your application</p>
		// 	<p>An attractive screenshot of your application</p>
		// 	<p>
		// 		A prominent button with a clear message (for example "Click here to
		// 		start") that links to your core app.
		// 	</p></div>
		<div>
			<h1>Block Crusher</h1>
			<button type="button" onClick={() => props.setGameState('playing')}>
				Click here to start
			</button>
			{/* added a gif of the game play */}
		</div>
		// </div>
	);
}
