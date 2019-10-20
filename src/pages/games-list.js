import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import GamesManifest from '../data/games-manifest.json';

function Games() {
	return (
		<div>
			<h1> Games </h1>
			<ul>
				{/* generates a link for each game in the list. */}
				{GamesManifest.semesters.map(batch => <Batch batch={batch} />)}
			</ul>
		</div>
	);
}

function Batch({batch}) {
	return (
		<li id={batch.id} key={batch.id}>
			<h2>{batch.name}</h2>
			<ul>
				{batch.games.map(game => <GameItem game={game} />)}
			</ul>
		</li>
	);
}

function GameItem({game}) {
	return (
		<li key={game.id}>
			<Link to={'game/' + game.id}>{game.name}</Link>
		</li>
	);
}

export default Games
