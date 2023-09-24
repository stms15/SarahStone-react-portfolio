import React from 'react';
import resume from '../../assets/files/SarahStone_Resume.pdf';

export default function Resume({ color }) {
  return (
    <div className="page" style={{ backgroundColor: color, color: 'white' }}>
      <p>
        Download my resume{' '}
        <a href={resume} download="SarahStone_Resume">
          here
        </a>
        .
      </p>

      <h5>Front-end Strengths</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Responsive Design</li>
      </ul>

      <h5>Back-end Strengths</h5>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>APIs</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
      </ul>
    </div>
  );
}
