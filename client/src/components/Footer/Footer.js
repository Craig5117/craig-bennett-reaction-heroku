import React from 'react';

function Footer() {
    return (
        <footer className="d-flex align-items-center flex-column">
            <div className="d-flex justify-content-between footer-links">
            <a href="https://github.com/Craig5117" target="_blank" rel="nofollow noopener noreferrer"><i className="fab fa-github contact-link"></i></a>
            <a href="https://www.linkedin.com/in/craigbennett5117/" target="_blank" rel="nofollow noopener noreferrer"><i className="fab fa-linkedin contact-link"></i></a>
            <a href="mailto:craig.bennett5117@gmail.com"><i className="fas fa-envelope contact-link"></i></a>
            </div>
            <a href="https://reactjs.org/" className="mt-3"><p>Built with <i className="fab fa-react icon footer-logo"></i><span> React</span></p></a>
        </footer>
    )
}

export default Footer;