// import components and pages
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import './styles/App.css';

function App() {
  // set page on open
  const [currentPage, setCurrentPage] = useState('About');

  // render page
  const renderPage = () => {
    if (currentPage === 'About') {
      return (
        <About
          handlePageChange={handlePageChange}
          color={'rgb(239, 214, 206)'}
        />
      );
    } else if (currentPage === 'Works') {
      return <Works color={'rgba(162, 103, 105)'} />;
    } else if (currentPage === 'Contact') {
      return <Contact color={'rgba(115, 44, 44, 1)'} />;
    } else if (currentPage === 'Resume') {
      return <Resume color={'rgba(50, 2, 22, 1)'} />;
    }
  };

  // handle page change
  const handlePageChange = (newPage) => setCurrentPage(newPage);

  return (
    <body>
      <div className="page-container">
        <div className="content">
          <Header handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default App;
