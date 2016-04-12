import React from 'react'

function Header(props) {
  const { toggleSidebar } = props

  return (
    <header className="Header">
      <div className="Header__menu-icon" onClick={toggleSidebar}><i></i></div>
      <div className="Header__title">Title</div>
      <div className="Header__spacer" />
      <nav className="Header__navigation">
        <a href="#" className="Header__navigation-item">Link</a>
        <a href="#" className="Header__navigation-item">Link</a>
        <a href="#" className="Header__navigation-item">Link</a>
        <a href="#" className="Header__navigation-item">Link</a>
      </nav>
    </header>
  )
}

export default Header
