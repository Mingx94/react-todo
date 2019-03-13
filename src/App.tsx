import React, { Component } from 'react';
import './App.css';
import GithubCorner from './components/GithubCorner/GithubCorner';
import Navigation from './components/Navigation/Navigation';
import Home from './views/Home';

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
        <Home active={this.state.active} />
        <GithubCorner link={'https://github.com/Mingx94/react-todo'} />
      </div>
    );
  }
}

export default App;
