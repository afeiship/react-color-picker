import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import objectAssign from 'object-assign';
import { SketchPicker, PhotoshopPicker } from 'react-color';

const CLASS_NAME = 'react-color-picker';

export default class ReactColorPicker extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  handleChange = (inEvent) => {
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
          color={value}
          onChangeComplete={this.handleChange}
          {...props}
        />
      </div>
    );
  }
}
