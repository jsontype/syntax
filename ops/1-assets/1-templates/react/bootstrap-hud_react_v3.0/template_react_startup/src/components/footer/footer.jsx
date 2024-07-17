import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="app-footer">
      &copy; {currentYear} SeanTheme All Right Reserved
    </div>
  );
}

export default Footer;