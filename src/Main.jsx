import React, { useState, useEffect } from "react";
import Navigation from './Navigation';
import Footer from "./Footer";

function Main() {
    const [backendData, setBackendData] = useState([]);
    let title = "";
    let content = "";
    const [pic, setPic] = useState("");
    

    useEffect(() => {
        fetch("http://adacheungonline.com/wp-json/wp/v2/pagescontent")
        .then(res => res.json())
        .then(data => setBackendData(data)); 
    }, []);

    function getPageContent() {
        for (let i = 0; i < backendData.length; i ++){
        if (backendData[i].title.rendered === "CDA Interview Guide"){
            title = backendData[i].title.rendered;
        content = backendData[i].content.rendered;
        fetch("http://adacheungonline.com/index.php/wp-json/wp/v2/media/" + backendData[i].featured_media)
          .then(res => res.json())
          .then(data => setPic("http://adacheungonline.com/wp-content/uploads/" + data.media_details.file));
      }
    }
    return content;
  }
  getPageContent();
    
    function createMarkup(html) {
        return { __html: html};
    }
    return (
        <div>
            
            <div>
                {title.length !== 0 && <div className="title"><h1>{title}</h1></div>}
                <img src={pic} alt="" className="main-img" />
            </div>           
            <div className="container page-content">
                <div dangerouslySetInnerHTML={createMarkup(content)}></div>
            </div>
            
        </div>
        
    );
}

export default Main;