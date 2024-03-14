// SocialMediaBar.js
import React from 'react';
import './SocialMediaBar.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { social } from '../constants';



const SocialMediaBar = () => {
  const handleIconClick = (event) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    window.open(url, '_blank');
  };

  return (
    <div className="social-media-bar">
      <a href={social[0].link} className="social-icon" onClick={handleIconClick}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={social[1].link} className="social-icon" onClick={handleIconClick}>
      <FontAwesomeIcon icon={faGoogle} />
      </a>
      <a href={social[2].link} className="social-icon" onClick={handleIconClick}>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
};

export default SocialMediaBar;
