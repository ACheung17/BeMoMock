import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Main from "./Main";
import Contact from "./Contact";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Footer from "./Footer";
import { Route, Switch, HashRouter } from 'react-router-dom';
import { useWindowScroll } from "react-use";

function App() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(pageYOffset > 250) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});

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
      <div>
        {pageYOffset && <ArrowUpwardIcon className="back-to-top" fontSize="large" onClick={backToTop} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
