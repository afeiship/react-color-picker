import ReactColorPicker from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: '#ff6600'
  };

  onChange = (inEvent) => {
    const { value } = inEvent.target;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app-container" style={{ background: value }}>
        <ReactColorPicker value={value} onChange={this.onChange} />
        <div className="is-label">{value}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
