import NewsCard from './NewsCard';

class CardList {
    // метод добавления карточек на страницу
    _addCard(options) {
      const cardElement = NewsCard.getCard(options);
      this.container.appendChild(cardElement);
    }
    // метод, отрисовывающий карточки из массива
    render(cardsPerClick) {
      if(this.cards.length > cardsPerClick) {
        this.cards.splice(0, cardsPerClick).forEach((options) => {
          this._addCard(options);
        });
      } else if (this.cards.length > 0) {
        this.cards.splice(0, this.cards.length).forEach((options) => {
          this._addCard(options);
        });
      } 
    }
    takeProps(container, cards) {
      this.container = container;
      this.cards = cards;
    }
}

export default new CardList()