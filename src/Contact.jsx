import React, { useState, useEffect } from "react";

function Contact() {
    const [backendData, setBackendData] = useState([]);
    let content = "";
    let comment = "";
    const [pic, setPic] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [instructions, setInstructions] = useState("");

    useEffect(() => {
        fetch("https://adacheungonline.com/wp-json/wp/v2/pagescontent")
        .then(res => res.json())
        .then(data => setBackendData(data)); 
        }, []);

        function getPageContent() {
            for (let i = 0; i < backendData.length; i ++){
                if (backendData[i].title.rendered === "Contact Us"){
                    content = backendData[i].content.rendered;
                    comment = backendData[i].acf.comment;
                    fetch("https://adacheungonline.com/index.php/wp-json/wp/v2/media/" + backendData[i].featured_media)
                    .then(res => res.json())
                    .then(data => setPic("https://adacheungonline.com/wp-content/uploads/" + data.media_details.file));
            }
        }
        return content;
    }
    getPageContent();

    function createMarkup(html) {
        return { __html: html};
    }

    function handleSubmit(){

    }

    function handleNameChange(event){
        console.log(event.target.value);
        setName(event.target)
    }
    function handleEmailChange(event){
        console.log(event.target.value);
        setEmail(event.target)
    }
    function handleInstructionsChange(event){
        console.log(event.target.value);
        setEmail(event.target)
    }
    return (
        <div>
            <div>
                <img src={pic} alt="" className="main-img" />
            </div>           
            <div className="container page-content">
                <div dangerouslySetInnerHTML={createMarkup(content)}></div>
            </div>
            
            <form className="mycontainer" onSubmit="handleSubmit">
                <div className="form-group">
                    <p className="input-label">NAME: *</p>
                    <input type="text" onChange={handleNameChange} className="form-control" style={{backgroundColor: 'lightgray'}} required />
                </div>
                <div className="form-group">
                    <p className="input-label">EMAIL ADDRESS: *</p>
                    <input type="email" onChange={handleEmailChange} className="form-control" style={{backgroundColor: 'lightgray'}} required />
                </div>
                <div  className="form-group">
                    <p className="input-label">HOW CAN WE HELP YOU? *</p>
                    <textarea rows="6" onChange={handleInstructionsChange} className="form-control" style={{backgroundColor: 'lightgray'}} required/>   
                </div>   
                <div className="input-label">
                    <input type="reset" className="btn btn-secondary btn-sm input-button" />
                    <input type="submit" className="btn btn-secondary btn-sm input-button" />
                </div>            
            </form>
            <div className="container comment">{comment}</div>
        </div>  
    );
}

export default Contact;