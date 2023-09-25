import React from 'react';
import resume from '../../assets/files/SarahStone_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Resume({ color }) {
  return (
    <div className="page" style={{ backgroundColor: color, color: 'white' }}>
      <a href={resume} download="SarahStone_Resume" id="resumeLink">
        <h3>
          My Resume <FontAwesomeIcon icon={faDownload} />
        </h3>
      </a>

      <div className="card-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h5>Front-end Strengths</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h5>Back-end Strengths</h5>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>APIs</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
