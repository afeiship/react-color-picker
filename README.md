# react-color-picker
> A wrapper for react-color.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-color-picker
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | string | false    | -       | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-color-picker/dist/style.css";

  // or use sass
  @import "~@jswork/react-color-picker/dist/style.scss";

  // customize your styles:
  $react-color-picker-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactColorPicker from '@jswork/react-color-picker';
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

  ```

## documentation
- https://afeiship.github.io/react-color-picker/


## license
Code released under [the MIT license](https://github.com/afeiship/react-color-picker/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-color-picker
[version-url]: https://npmjs.org/package/@jswork/react-color-picker

[license-image]: https://img.shields.io/npm/l/@jswork/react-color-picker
[license-url]: https://github.com/afeiship/react-color-picker/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-color-picker
[size-url]: https://github.com/afeiship/react-color-picker/blob/master/dist/react-color-picker.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-color-picker
[download-url]: https://www.npmjs.com/package/@jswork/react-color-picker
