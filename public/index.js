import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactColorPicker from '../src/main';
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
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-color-picker"
        style={{ background: value }}>
        <ReactColorPicker value={value} onChange={this.onChange} />
        <div className="is-label">{value}</div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
