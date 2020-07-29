import React from 'react';

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top myNav">
            <a className="navbar-brand" href="#">
                <img src="bemo-logo2.png" width="120" height="auto" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" >Main<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://cdainterview.com/how-to-prepare-for-cda-interview.html">How To Prepare</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://cdainterview.com/sample-cda-interview-questions.html">CDA Interview Questions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/contactus">Contact Us</a>
                    </li>
                </ul>  
            </div>
        </nav>
    );
}

export default Navigation;