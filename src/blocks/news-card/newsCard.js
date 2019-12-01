export default class NewsCard {
    constructor(options) {
      this.options = options;
    // добавляем карточку в свойство объекта
      this.cardElement = this.create();
    }
  // верстаем карточку
    create() {
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      newsCard.insertAdjacentHTML('afterbegin', `<div class="news-card__image"></div>
      <div class="news-card__description">
          <p class="news-card__date main-text gray-text"></p>
          <div class="news-card__description-container">
              <h3 class="news-card__title h3-text"></h3>
              <p class="news-card__text card-text"></p>
          </div>
          <p class="news-card__source gray-text"></p>
      </div>`);
      // наполняем карточку внешним контентом
      newsCard.querySelector(".news-card__image").style.backgroundImage = `url(${this.options.link})`;
      newsCard.querySelector('.news-card__date').textContent = this.options.date;
      newsCard.querySelector(".news-card__title").textContent = this.options.title;
      newsCard.querySelector(".news-card__text").textContent = this.options.text;
      newsCard.querySelector(".news-card__source").textContent = this.options.sourse;
      return newsCard;
    }
}