import React from 'react';

export default function Explainer() {
	return (
		<div id="rules">
			<h2>About the Game</h2>
			<p>
				The goal of this game is to clear the board and reach a target score.
			</p>
			<p>
				Game play is similar to candy crush, where you are trying to switch
				neighboring tiles to make three or more tiles of the same color line up
				in a row or column.
			</p>
			<p>
				As you align the tiles, matching tiles of three or more in a row will
				disappear allowing for the tiles above to fall down and more tiles
				appaer at the top of your board
			</p>
			<p>
				Each column as a set number of tiles that can appear in it. Once all
				hidden tiles appear on your board. Empty columns will start disappering
			</p>
			<p>You can not trade placing with an empty tile.</p>
			<p>
				There is a ranomize button that will randomly rearrange the visable
				tiles in to the bottom rows. So more tiles can protentianl fall and more
				moves can be made. You can only randomize your board a set number of
				times.
			</p>
			<p>
				Once you can no longer make any moves or randonize your board, the game
				will end
			</p>
		</div>
	);
}
