import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      armazenador: [],
    };
  }

  ableToSave = () => {
    const max = 90;
    const maxSum = 210;
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    if (
      cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || Number(cardAttr1) > max || Number(cardAttr1) < 0
      || Number(cardAttr2) > max || Number(cardAttr2) < 0
      || Number(cardAttr3) > max || Number(cardAttr3) < 0
      || (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxSum)
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

    handleChange = ({ target }) => {
      const { name } = target;
      const value = target.type === 'checkbox'
        ? target.checked : target.value;
      this.setState({
        [name]: value,
      }, () => this.ableToSave());
    }

    onSaveButtonClick = (event) => {
      event.preventDefault();
      const { cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage, cardRare,
        cardTrunfo, armazenador } = this.state;
      this.setState((card) => ({
        armazenador: [...armazenador, {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
          armazenador,
        }],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: cardTrunfo ? true : card.hasTrunfo,
      }));
    }

    // addNewCard = (armazenador) => {
    //   this.setState((prevState) => {
    //     armazenador: [...prevState, armazenador]
    //   });
    // }
    deletCard = (elem) => {
      const { armazenador } = this.state;
      const cards = [...armazenador];
      const indexCards = armazenador[elem];
      cards.splice(elem, 1);
      this.setState({
        armazenador: cards,
        hasTrunfo: indexCards.cardTrunfo ? false : elem.hasTrunfo,
      });
    }

    render() {
      const { cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage, cardRare,
        cardTrunfo, isSaveButtonDisabled, hasTrunfo, armazenador } = this.state;
      return (
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            handleChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            armazenador={ armazenador }
          />
          {armazenador.map((card, index) => (
            <div key={ card.cardName }>
              <p>{ card.cardName }</p>
              <p>{ card.cardDescription }</p>
              <p>{ card.cardAttr1 }</p>
              <p>{ card.cardAttr2 }</p>
              <p>{ card.cardAttr3 }</p>
              <p>{ card.cardImage }</p>
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deletCard(index) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      );
    }
}

export default App;
