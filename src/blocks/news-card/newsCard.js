export default class NewsCard {
    constructor(options) {
      this.options = options;
    // добавляем карточку в свойство объекта
      this.cardElement = this.create();
    }
  // верстаем карточку
    create() {
      const newsCard = document.createElement('a');
      newsCard.classList.add('news-card');
      newsCard.setAttribute('target', 'blank')
      newsCard.insertAdjacentHTML('afterbegin', `<div class="news-card__image"></div>
      <div class="news-card__description">
          <p class="news-card__date main-text gray-text"></p>
          <div class="news-card__description-container">
              <h3 class="news-card__title h3-text"></h3>
              <p class="news-card__text card-text"></p>
          </div>
          <p class="news-card__source gray-text"></p>
      </div>`);
      // переводим дату в нужный формат
      const date = new Date(this.options.publishedAt.slice(0, 10).split('-').join(', ')).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).slice(0, -2);
      // наполняем карточку внешним контентом
      newsCard.setAttribute('href', `${this.options.url}`);
      newsCard.querySelector(".news-card__image").style.backgroundImage = this.options.urlToImage.match(/(png|jpe?g|svg)/) ? `url(${this.options.urlToImage})` : '';
      newsCard.querySelector('.news-card__date').textContent = date;
      newsCard.querySelector(".news-card__title").textContent = this.options.title;
      newsCard.querySelector(".news-card__text").textContent = this.options.description;
      newsCard.querySelector(".news-card__source").textContent = this.options.source.name;
      return newsCard;
    }
}