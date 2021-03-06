import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ComicsList from 'Comics/screens/ComicsList';
import Comic from 'Comics/screens/Comic';
import CharactersList from 'Characters/screens/CharactersList';
import Character from 'Characters/screens/Character';
import PageHeader from 'Components/PageHeader';
import PageFooter from 'Components/PageFooter';
import 'styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />        
        <Route exact path={this.props.match.url} component={ComicsList}/>
        <Route exact path="/comics" component={ComicsList}/>
        <Route exact path="/comics/:comicid" component={Comic}/>
        <Route exact path="/characters" component={CharactersList}/>
        <Route exact path="/characters/:characterid" component={Character}/>
        <PageFooter />
      </div>
    );
  }
}

export default App;
