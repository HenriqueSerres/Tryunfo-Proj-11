import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { type, name, value, dataTest, handleChange } = this.props;
    return (
      <label htmlFor={ dataTest }>
        <input
          type={ type }
          value={ value }
          data-testid={ dataTest }
          onChange={ handleChange }
          name={ name }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
