import React from 'react';
import resume from '../../SarahStone_Resume.pdf';

export default function Resume() {
  return (
    <div>
      <p>
        Download my resume{' '}
        <a href={resume} download>
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
