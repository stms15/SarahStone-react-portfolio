import React from 'react';
import githubIcon from '../assets/images/GitHub-icon.svg';
import linkedinIcon from '../assets/images/LinkedIn-icon.png';
import envelopeIcon from '../assets/images/envelope.svg';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <img src={linkedinIcon} alt="LinkedIn icon" className="icon" />
          <a
            href="https://www.linkedin.com/in/sarahtmstone/"
            target="_blank"
            rel="noreferrer"
          >
            sarahtmstone
          </a>
        </li>
        <li>
          <img src={githubIcon} alt="GitHub icon" className="icon" />
          <a href="https://github.com/stms15" target="_blank" rel="noreferrer">
            stms15
          </a>
        </li>
        <li>
          <img src={envelopeIcon} alt="envelope icon" className="icon" />
          <a href="mailto:stms15@mun.ca">stms15@mun.ca</a>
        </li>
      </ul>
      <div>&copy; 2023 Sarah Stone</div>
    </footer>
  );
}
