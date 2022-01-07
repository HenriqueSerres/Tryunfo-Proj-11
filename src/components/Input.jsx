import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { type, value, dataTest, handleChange } = this.props;
    return (
      <label htmlFor={ dataTest }>
        <input
          type={ type }
          value={ value }
          data-testid={ dataTest }
          onChange={ handleChange }
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
};
