import React from 'react';
import Navbar from './Navbar';

export default function Header(handlePageChange) {
  return (
    <header>
      <h1>Sarah Stone</h1>
      <h3>Full-Stack Developer</h3>
      <Navbar handlePageChange={handlePageChange} />
    </header>
  );
}
