import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';

export default function Header({ handlePageChange }) {
  return (
    <header className="headline-columns">
      <div>
        <h1>Sarah Stone</h1>
        <h5>Full-Stack Developer</h5>
      </div>
      <Navbar handlePageChange={handlePageChange} />
    </header>
  );
}
