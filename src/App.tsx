import React, { Component } from 'react';
import './App.css';
import GithubCorner from './components/GithubCorner/GithubCorner';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  state = {
    active: 0,
  };

  changeActive = (status: number) => {
    this.setState({ active: status });
  };

  render() {
    return (
      <div className="App">
        <Navigation
          active={this.state.active}
          navLinks={['All Tasks', 'Active', 'Completed']}
          onActiveChange={stateIndex => this.changeActive(stateIndex)}
        />
        <h1>Hello World</h1>
        <GithubCorner link={'https://google.com'} />
      </div>
    );
  }
}

export default App;
