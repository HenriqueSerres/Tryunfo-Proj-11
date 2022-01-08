import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <>
        <Input
          type="text"
          dataTest="name-input"
          value={ cardName }
          handleChange={ onInputChange }
        />
        <Input
          type="textarea"
          dataTest="description-input"
          value={ cardDescription }
          handleChange={ onInputChange }
        />
        <Input
          type="number"
          dataTest="attr1-input"
          value={ cardAttr1 }
          handleChange={ onInputChange }
        />
        <Input
          type="number"
          dataTest="attr2-input"
          value={ cardAttr2 }
          handleChange={ onInputChange }
        />
        <Input
          type="number"
          dataTest="attr3-input"
          value={ cardAttr3 }
          handleChange={ onInputChange }
        />
        <Input
          type="text"
          dataTest="image-input"
          value={ cardImage }
          handleChange={ onInputChange }
        />
        <label htmlFor="rare-input">
          <select
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
