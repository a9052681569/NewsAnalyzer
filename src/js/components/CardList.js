export default class CardList {
    constructor(cardsPerClick, newsCard) {
      this.cardsPerClick = cardsPerClick
      this.newsCard = newsCard
    }
    // метод добавления карточек на страницу
    _addCard(options) {
      const cardElement = this.newsCard.getCard(options);
      this.container.appendChild(cardElement);
    }
    // метод, отрисовывающий карточки из массива
    render() {
      if(this.cards.length > this.cardsPerClick) {
        this.cards.splice(0, this.cardsPerClick).forEach((options) => {
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