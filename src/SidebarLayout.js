import React from 'react'
import classNames from 'classnames'

function SidebarLayout(props) {
  const {
    children,
    sidebar,
    isDocked,
    isVisible,
    toggleSidebar,
  } = props

  const sidebarLayoutClassNames = classNames({
    'SidebarLayout': true,
    // 'SidebarLayout--docked': isDocked,
  })
  const sidebarLayoutOverlayClassNames = classNames({
    'SidebarLayout__overlay': true,
    'SidebarLayout__overlay--is-visible': isVisible && !isDocked,
  })
  const sidebarLayoutSidebarClassNames = classNames({
    'SidebarLayout__sidebar': true,
    'SidebarLayout__sidebar--is-visible': isVisible,
  })
  const sidebarLayoutPageClassNames = classNames({
    'SidebarLayout__page': true,
    'SidebarLayout__page--is-docked': isVisible && isDocked,
  })

  return (
    <div className={sidebarLayoutClassNames}>
      <div className={sidebarLayoutOverlayClassNames} onClick={toggleSidebar} />
      <div className={sidebarLayoutSidebarClassNames}>{sidebar}</div>
      <div className={sidebarLayoutPageClassNames}>{children}</div>
    </div>
  )
}

export default SidebarLayout
