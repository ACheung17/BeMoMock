import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Main from "./Main";
import Contact from "./Contact";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

function App() {
  // const [backendData, setBackendData] = useState([]);
  // const [page, setPage] = useState("Main");
  // let title = "";
  // let content = "";
  // const [pic, setPic] = useState("");
  // let comment = "";

  // useEffect(() => {
  //   fetch("http://adacheungonline.com/wp-json/wp/v2/pagescontent")
  //     .then(res => res.json())
  //     .then(data => setBackendData(data)); 
  // }, []);

  // function getPageContent() {
  //   for (let i = 0; i < backendData.length; i ++){
  //     if (page === "Main" && backendData[i].title.rendered === "CDA Interview Guide"){
  //       title = backendData[i].title.rendered;
  //       content = backendData[i].content.rendered;
  //       fetch("http://adacheungonline.com/index.php/wp-json/wp/v2/media/" + backendData[i].featured_media)
  //         .then(res => res.json())
  //         .then(data => setPic("http://adacheungonline.com/wp-content/uploads/" + data.media_details.file));
  //     }
  //     else if (page === "Contact" && backendData[i].title.rendered === "Contact Us"){
  //       content = backendData[i].content.rendered;
  //       comment = backendData[i].acf.comment;
  //       fetch("http://adacheungonline.com/index.php/wp-json/wp/v2/media/" + backendData[i].featured_media)
  //         .then(res => res.json())
  //         .then(data => setPic("http://adacheungonline.com/wp-content/uploads/" + data.media_details.file));
  //     }
  //   }
  //   return content;
  // }
  // getPageContent();
  // console.log(content);
  return (
    <div>
    {/* page={page => setPage(page)} */}
    <Navigation />
      <HashRouter>
        <Switch>
          <Route path="/" exact={true}>
          {/* page={page} title={title} content={content} pic={pic}  */}
            <Main />
          </Route>
          <Route path="/contactus" exact={true}>
          {/* content={content} pic={pic} comment={comment}  */}
            <Contact />
          </Route>
        </Switch>
      </HashRouter>
      
      {/* {page === "Main"? <Main page={page} title={title} content={content} pic={pic} /> : <Contact content={content} pic={pic} comment={comment} />} */}
      
      <Footer />
    </div>
  );
}

export default App;
