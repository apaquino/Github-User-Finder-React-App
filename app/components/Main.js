import React from 'react';
import SearchGithub from './SearchGithub';
import { RouteHandler } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <div className="ui large blue inverted fixed menu">
          <a className="item" href="./index.html">
            <i className="github icon"></i>
            Github User Finder
          </a>
          <div className="right menu">
            <SearchGithub />
          </div>
        </div>
        <h1></h1>
        <br />
        <div className='ui segement'>
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }

}

export default Main;
