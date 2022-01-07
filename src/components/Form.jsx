import React from 'react';
import Input from './Input';

export default class Form extends React.Component {
  render() {
    return (
      <>
        <Input
          type="text"
          dataTest="name-input"
          value=""
          handleChange={ () => {} }
        />
        <Input
          type="textarea"
          dataTest="description-input"
          value=""
          handleChange={ () => {} }
        />
        <Input
          type="number"
          dataTest="attr1-input"
          value=""
          handleChange={ () => {} }
        />
        <Input
          type="number"
          dataTest="attr2-input"
          value=""
          handleChange={ () => {} }
        />
        <Input
          type="number"
          dataTest="attr3-input"
          value=""
          handleChange={ () => {} }
        />
        <Input
          type="text"
          dataTest="image-input"
          value=""
          handleChange={ () => {} }
        />
        <label htmlFor="rare-input">
          <select id="rare-input" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">normal</option>
          </select>
        </label>
        <Input
          type="checkbox"
          dataTest="trunfo-input"
          // value=
          handleChange={ () => {} }
        />
        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}
