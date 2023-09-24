import React from 'react';
import '../styles/Navbar.css';

export default function Navbar({ handlePageChange }) {
  return (
    <nav>
      <ul>
        <span style={{ width: '25%' }}>
          <li href="#about" onClick={() => handlePageChange('About')}>
            About
          </li>
        </span>
        <span style={{ width: '25%' }}>
          <li href="#work" onClick={() => handlePageChange('Works')}>
            Work
          </li>
        </span>
        <span style={{ width: '25%' }}>
          <li
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            style={{ color: 'white' }}
          >
            Contact
          </li>
        </span>
        <span style={{ width: '25%' }}>
          <li
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            style={{ color: 'white' }}
          >
            Resume
          </li>
        </span>
      </ul>
    </nav>
  );
}
