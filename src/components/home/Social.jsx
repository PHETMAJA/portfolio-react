import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://instagram.com/phetmaja"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://github.com/PHETMAJA"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://web.facebook.com/profile.php?id=100004201714083"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-facebook-f"></i>
      </a>
    </div>
  );
};

export default Social;
