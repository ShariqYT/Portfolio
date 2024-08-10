import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer flex items-center lg:text-base text-sm justify-center mt-20 mb-8 dark:text-white">
      <p>&copy; {currentYear} | Mohammad Shariq | All rights reserved</p>
    </footer>
  )
}

export default Footer
