import React from 'react';
import './App.css';

const keys = [
  'C',
  'G',
  'D',
  'A',
  'E',
  'B',
  'G♭',
  'F♯',
  'D♭',
  'C♯',
  'A♭',
  'E♭',
  'B♭',
  'F',
];
const modes = [
  'Major',
  'Minor',
];

const getRand = array =>
  array[Math.floor(Math.random() * array.length)];

const getScale = () => `${getRand(keys)} ${getRand(modes)}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scale: getScale() };
  }

  getNextScale = () => {
    this.setState({ scale: getScale() });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.scale}</p>
          <button onClick={this.getNextScale}>Get Next Scale</button>
        </header>
      </div>
    );
  }
}

export default App;
