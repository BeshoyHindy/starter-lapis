// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import FontFaceObserver from 'fontfaceobserver';
import { Route, Link } from 'react-router-dom';

import './index.css';
import config from 'config';
import { actions } from 'redux/actions/app';
import About from './About';
import Projects from './Projects';
import { NavLink, Header, Navigation } from 'core';

class App extends Component {
  componentWillMount() {
    this.loadFonts();
  }

  // Observe loading and set proper styles when fonts have loaded
  // Fonts are added inside global.css
  loadFonts() {
    const roboto = new FontFaceObserver('Roboto');

    Promise.all([roboto.load()]).then(() => {
      document.body.className += ' fonts-loaded';
    });
  }

  render() {
    const { connectionError, location } = this.props;
    return (
      <div styleName="app-wrap">
        <Helmet {...config.app.head} />
        <div styleName="app">
          {connectionError &&
            <div styleName="connection-error">
              <span>
                Вы не в сети
              </span>
            </div>}
          <Header />
          <Navigation
            links={[
              { to: '/', text: 'About' },
              { to: '/projects', text: 'Projects' },
            ]}
          />
          <div styleName="appContent">
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </div>
        </div>
      </div>
    );
  }
}
export default connect((state, ownProps) => ({}))(App);