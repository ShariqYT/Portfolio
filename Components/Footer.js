import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer flex items-center justify-center pt-20 pb-8 text-white">
      <p>&copy; {currentYear} | Mohammad Shariq | All rights reserved</p>
    </footer>
  )
}

export default Footer
