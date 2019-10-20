import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import GamesManifest from '../data/games-manifest.json';

const flatList = GamesManifest.semesters.map(semester => semester.games).flat();

function Game({match}) {
	var game = FindGame(match.params.id);
	return (
		<div>
			<h1> {game.name} </h1>
			<h2> {game.id} </h2>
			{/* We use dangerouslySetInnerHTML here, as we set these descriptions by hand,
				and need to do this to render newlines and text correctly without hacks. */}
			<div class="description" dangerouslySetInnerHTML={{__html: game.description}} />
			<a href={game.download} target="_blank"><button>Download now!</button></a>
		</div>
	);
}

function FindGame(id) {
	//Search through GamesManifest for a game with a matching link
	var matches = flatList.filter(game => game.id == id);
	if(matches.length == 0) {
		return {
			name: "Not found!",
		}
	}
	else {
		return matches[0];
	}
}

export default Game
