import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Switch} from "react-router-dom";

import './index.css';

//Page parts!
import Header from './header';
import Footer from './footer';
//Different pages
import Home from './pages/home';
import About from './pages/about';
import GamesList from './pages/games-list';
import Game from './pages/game';
import NotFound from './pages/notfound';

function App() {
  document.title = "SGD @ UVA"
  return (
    <Router>
      <Header />
      <div id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/games" component={GamesList} />
          <Route path="/game/:id" component={Game} />
          //Doesn't match a respected path... 404
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
