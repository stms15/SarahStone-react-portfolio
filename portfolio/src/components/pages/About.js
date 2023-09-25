import React from 'react';
import profileImg from '../../assets/images/Sarah-convocation-2022.png';

export default function About({ handlePageChange, color }) {
  return (
    <div className="page" style={{ backgroundColor: color }}>
      <h2>About Me</h2>
      <span id="imageSpan">
        <img
          src={profileImg}
          className="profileImg"
          alt={'Sarah on a bridge in Quidi Vidi'}
        ></img>
      </span>
      <p>Welcome to my website &#9786;</p>
      <p>
        My name is Sarah and I&rsquo;m a Full&ndash;Stack Web Developer based in
        Newfoundland.
      </p>
      <p>
        I have a bachelor&rsquo;s degree in Math and Physics, where I
        specialized in Python Programming. After graduation, I spent over a year
        as a Research Assitant at MUN where I collaborated on a Space Physics
        research project titled &ldquo;Analysis of Radiation Belt
        &lsquo;Killer&rsquo; Electron Energy Spectra.&rdquo; Our paper is
        published in the Journal of Geophysical Research: Space Physics and can
        be accessed{' '}
        <a
          href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JA030698"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        After my time as a researcher, I continued my studies in UNB's Coding
        Bootcamp program to become a Full&ndash;Stack Web Developer. I learned a
        wide variety of skills including HTML, CSS, JavaScript, APIs, Node.js,
        Express.js, SQL and NoSQL databases, React, and more. I completed and
        contributed to numerous projects during this time to enhance my web
        development skills. Check out the{' '}
        <a href="#works" onClick={() => handlePageChange('Works')}>
          Work
        </a>{' '}
        page for details.
      </p>
      <p>
        If you&rsquo;d like to discuss employment or collaboration
        opportunities, or you just want to chat, please{' '}
        <a href="#contact" onClick={() => handlePageChange('Contact')}>
          contact me
        </a>
        !
      </p>
    </div>
  );
}
