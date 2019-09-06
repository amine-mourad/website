import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Index from './components/Index';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Work from './components/Work';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/work" component={Work} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
      </BrowserRouter>
    )
  }
}

export default App;
