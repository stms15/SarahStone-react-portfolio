import React from 'react';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li href="#about" onClick={() => handlePageChange('About')}>
          About
        </li>
        <li href="#work" onClick={() => handlePageChange('Work')}>
          Work
        </li>
        <li href="#contact" onClick={() => handlePageChange('Contact')}>
          Contact
        </li>
      </ul>
    </div>
  );
}
