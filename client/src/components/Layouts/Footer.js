// client/src/components/Layout/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} College Event Management System</p>
    </footer>
  );
};

export default Footer;