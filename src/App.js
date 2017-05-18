import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ComicList from './ComicList';
import CharacterList from './CharacterList';
import logo from './logo.svg';
import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} style={{maxWidth: '100px'}}className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="/characters"> <button className="btn">Test </button> </Link>
          <Route exact path={this.props.match.url} component={ComicList}/>
          <Route exact path='/characters' component={CharacterList}/>
        </p>
      </div>
    );
  }
}

export default App;
