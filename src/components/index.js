import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import hexToRgba from 'hex-to-rgba';
import { SketchPicker, PhotoshopPicker } from 'react-color';

const CLASS_NAME = 'react-color-picker';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  onChange = (inEvent) => {
    const { onChange } = this.props;
    const target = inEvent;
    const { r, g, b, a } = inEvent.rgb;
    target.value = `rgba(${r}, ${g}, ${b}, ${a})`;
    onChange({ target });
  };

  render() {
    const { className, value, onChange, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}>
        <SketchPicker
          {...props}
          color={value}
          onChangeComplete={this.onChange}
        />
      </div>
    );
  }
}
