class NewsCard {
  // верстаем карточку
    _create() {
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
      return newsCard;
    }
    // наполняем карточку внешним контентом
    getCard(options) {
      const card = this._create()
      // переводим дату в нужный формат
      const date = new Date(options.publishedAt.slice(0, 10).split('-').join(', ')).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).slice(0, -2);
      card.setAttribute('href', `${options.url}`);
      card.querySelector(".news-card__image").style.backgroundImage = typeof options.urlToImage === 'string' && options.urlToImage.match(/(png|jpe?g|svg)/) ? `url(${options.urlToImage})` : '';
      card.querySelector('.news-card__date').textContent = date;
      card.querySelector(".news-card__title").textContent = options.title;
      card.querySelector(".news-card__text").textContent = options.description;
      card.querySelector(".news-card__source").textContent = options.source.name;
      return card;
    }
}

export default new NewsCard()