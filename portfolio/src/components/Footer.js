import React from 'react';
import githubIcon from '../GitHub-icon.svg';
import linkedinIcon from '../LinkedIn-icon.png';
import envelopeIcon from '../envelope.svg';

export default function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <img src={githubIcon} alt="GitHub icon" />
            <a
              href="https://github.com/stms15"
              target="_blank"
              rel="noreferrer"
            >
              stms15
            </a>
          </li>
          <li>
            <img src={linkedinIcon} alt="LinkedIn icon" />
            <a
              href="https://www.linkedin.com/in/sarahtmstone/"
              target="_blank"
              rel="noreferrer"
            >
              sarahtmstone
            </a>
          </li>
          <li>
            <img src={envelopeIcon} alt="envelope icon" />
            <a href="mailto:stms15@mun.ca">stms15@mun.ca</a>
          </li>
        </ul>
      </div>
      <div>&copy; 2023 Sarah Stone</div>
    </footer>
  );
}
