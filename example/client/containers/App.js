import React, { Component } from 'react'
import classNames from 'classnames'

import SidebarLayout from '../../../src'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const propTypes = {

}

const defaultProps = {
  isVisible: false,
  isDocked: false,
}

class App extends Component {
  constructor(props) {
    super(props)

    const { isVisible } = props

    this.state = {
      isVisible: isVisible,
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    this.setState({
      isVisible: !this.state.isVisible,
    })
  }

  render() {
    const { isDocked } = this.props

    const sidebarProps = {
      sidebar: <Sidebar />,
      isDocked: isDocked,
      isVisible: this.state.isVisible,
      toggleSidebar: this.toggleSidebar,
    }
    const headerProps = {
      toggleSidebar: this.toggleSidebar,
    }

    return (
      <SidebarLayout {...sidebarProps}>
        <Header {...headerProps} />
        hello
        {/*<Content></Content>
        <Footer></Footer>*/}
      </SidebarLayout>
    )
      // <div type="button" className="btn btn-primary">woah!!</div>
  }
}

App.defaultProps = defaultProps

export default App

// import React from 'react';
// import ReactDOM from 'react-dom';

// import Sidebar from '../../../src';
// import MaterialTitlePanel from './material_title_panel';
// import SidebarContent from './sidebar_content';

// const styles = {
//   contentHeaderMenuLink: {
//     textDecoration: 'none',
//     color: 'white',
//     padding: 8,
//   },
//   content: {
//     padding: '16px',
//   },
// };

// const App = React.createClass({
//   getInitialState() {
//     return {
//       docked: false,
//       open: false,
//       transitions: true,
//       touch: true,
//       shadow: true,
//       pullRight: false,
//       touchHandleWidth: 20,
//       dragToggleDistance: 30,
//     };
//   },

//   onSetOpen(open) {
//     this.setState({open: open});
//   },

//   menuButtonClick(ev) {
//     ev.preventDefault();
//     this.onSetOpen(!this.state.open);
//   },

//   renderPropCheckbox(prop) {
//     const toggleMethod = (ev) => {
//       const newState = {};
//       newState[prop] = ev.target.checked;
//       this.setState(newState);
//     };

//     return (
//       <p key={prop}>
//         <input type="checkbox" onChange={toggleMethod} checked={this.state[prop]} id={prop} />
//         <label htmlFor={prop}> {prop}</label>
//       </p>);
//   },

//   renderPropNumber(prop) {
//     const setMethod = (ev) => {
//       const newState = {};
//       newState[prop] = parseInt(ev.target.value, 10);
//       this.setState(newState);
//     };

//     return (
//       <p key={prop}>
//          {prop} <input type="number" onChange={setMethod} value={this.state[prop]} />
//       </p>);
//   },

//   render() {
//     const sidebar = <SidebarContent />;

//     const contentHeader = (
//       <span>
//         {!this.state.docked &&
//          <a onClick={this.menuButtonClick} href="#" style={styles.contentHeaderMenuLink}>=</a>}
//         <span> React Sidebar</span>
//       </span>);

//     const sidebarProps = {
//       sidebar: sidebar,
//       docked: this.state.docked,
//       sidebarClassName: 'custom-sidebar-class',
//       open: this.state.open,
//       touch: this.state.touch,
//       shadow: this.state.shadow,
//       pullRight: this.state.pullRight,
//       touchHandleWidth: this.state.touchHandleWidth,
//       dragToggleDistance: this.state.dragToggleDistance,
//       transitions: this.state.transitions,
//       onSetOpen: this.onSetOpen,
//     };

//     return (
//       <Sidebar {...sidebarProps}>
//         <MaterialTitlePanel title={contentHeader}>
//           <div style={styles.content}>
//             <p>React Sidebar is a sidebar component for React. It offers the following features:</p>
//             <ul>
//               <li>Have the sidebar slide over main content</li>
//               <li>Dock the sidebar next to the content</li>
//               <li>Touch enabled: swipe to open and close the sidebar</li>
//               <li>Easy to combine with media queries for auto-docking (<a href="responsive_example.html">see example</a>)</li>
//               <li>Sidebar and content passed in as PORCs (Plain Old React Components)</li>
//               <li><a href="https://github.com/balloob/react-sidebar">Source on GitHub</a> (MIT license)</li>
//               <li>Only dependency is React</li>
//             </ul>
//             <p><a href="https://github.com/balloob/react-sidebar#installation">Instructions how to get started.</a></p>
//             <p><b>Current rendered sidebar properties:</b></p>
//             {['open', 'docked', 'transitions', 'touch', 'shadow', 'pullRight'].map(this.renderPropCheckbox)}
//             {['touchHandleWidth', 'dragToggleDistance'].map(this.renderPropNumber)}
//           </div>
//         </MaterialTitlePanel>
//       </Sidebar>
//     );
//   },
// });

// export default App
