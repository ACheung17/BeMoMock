import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div className="footer">
            <div className="copyright">
                ©2013-2016 BeMo Academic Consulting Inc. All rights reserved.  
                <a className="footer-link" href="http://www.cdainterview.com/disclaimer-privacy-policy.html"> Disclaimer & Privacy Policy</a> 
                <a className="footer-link" href="#"> Contact Us</a>
            </div>
            <div className="socials">
            <a href="#" target="__blank" className="social"><FacebookIcon /></a>
            <a href="#" target="__blank" className="social"><TwitterIcon /></a>
            </div>
        </div>
        
    );
}

export default Footer;