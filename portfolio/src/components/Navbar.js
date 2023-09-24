import React from 'react';
import '../styles/Navbar.css';

export default function Navbar({ handlePageChange }) {
  return (
    <nav>
      <ul>
        <li href="#about" onClick={() => handlePageChange('About')}>
          About
        </li>
        <li href="#work" onClick={() => handlePageChange('Works')}>
          Work
        </li>
        <li href="#contact" onClick={() => handlePageChange('Contact')}>
          Contact
        </li>
      </ul>
    </nav>
  );
}
