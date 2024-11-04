import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">
        <div className="nav-menu">
          <ul className="nav-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Header