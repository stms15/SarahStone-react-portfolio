// import components and pages
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';

function App() {
  // set page on open
  const [currentPage, setCurrentPage] = useState('About');

  // render page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About handlePageChange={handlePageChange} />;
    } else if (currentPage === 'Works') {
      return <Works />;
    } else if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  // handle page change
  const handlePageChange = (newPage) => setCurrentPage(newPage);

  return (
    <body>
      <Header handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </body>
  );
}

export default App;
