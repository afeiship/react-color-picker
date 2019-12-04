# react-color-picker
> A wrapper for react-color.

## installation
```shell
npm install -S @feizheng/react-color-picker
```
## properties
| property        | type | description |
| --------------- | ---- | ----------- |
| className       | -    | -           |
| value           | -    | -           |
| onChange        | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-color-picker/dist/style.scss";

  // customize your styles:
  $react-color-picker-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://afeiship.github.io/react-color-picker/
