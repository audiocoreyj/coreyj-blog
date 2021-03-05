import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer-container">
            <div className="social-icons">
                <a 
                className="social-icon-link github"
                href="https://github.com/audiocoreyj"
                target="_blank"
                aria-label="Github"
                > 
                    <i className="fab fa-github" />
                </a>
                <a 
                className="social-icon-link instagram"
                href="https://www.instagram.com/coreeyj_/"
                target="_blank"
                aria-label="Instagram"
                > 
                    <i className="fab fa-instagram" />
                </a>
                <a
                href="https://twitter.com/audiocoreyj"
                className="social-icon-link twitter"
                target="_blank"
                aria-label="Twitter"
                > 
                    <i className="fab fa-twitter" />
                </a>
                <a 
                className="social-icon-link linkedin"
                href="https://www.linkedin.com/in/corey-jordan-27aab7a5/"
                target="_blank"
                aria-label="LinkedIn"
                > 
                    <i className="fab fa-linkedin" />
                </a>
            </div>  
        </div>
    )
}

export default Footer
