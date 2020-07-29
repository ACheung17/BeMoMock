import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Main from "./Main";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, Switch, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navigation />
      <HashRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Main />
          </Route>
          <Route path="/contactus" exact={true}>
            <Contact />
          </Route>
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
