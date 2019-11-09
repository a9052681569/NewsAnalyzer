import NewsCard from './news-card/newsCard';

export default class CardList {
    constructor(container, cards) {
    // добавляем контейнер в свойство объекта
      this.container = container;
    // добавляем массив карточек в свойство объекта
      this.cards = cards;
    }
    // метод добавления карточек на страницу
    addCard(options) {
      const { cardElement } = new NewsCard(options);
      this.container.appendChild(cardElement);
    }
    // метод, отрисовывающий карточки
    render() {
      if(this.cards.length > 1) {
        this.cards.splice(0, 3).forEach((options) => {
          this.addCard(options);
        });
      }
    }
}