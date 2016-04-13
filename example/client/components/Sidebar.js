import React from 'react'

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="Sidebar__title">Title</div>
      <nav className="Sidebar__navigation">
        <a href="#" className="Sidebar__navigation-item">Link</a>
        <a href="#" className="Sidebar__navigation-item">Link</a>
        <a href="#" className="Sidebar__navigation-item">Link</a>
        <a href="#" className="Sidebar__navigation-item">Link</a>
      </nav>
    </div>
  )
}

export default Sidebar
