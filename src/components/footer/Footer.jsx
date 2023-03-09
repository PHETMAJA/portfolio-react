import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Thanachot</h1>

        <div className="footer__social">
          <a
            href="https://instagram.com/phetmaja"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/PHETMAJA"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100004201714083"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; phetmaja. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
