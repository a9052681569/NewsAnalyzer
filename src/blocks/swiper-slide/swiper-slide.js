export default class SwiperSlide {
    constructor(options) {
      this.options = options;
      // изменяем формат даты
      this.options.commit.committer.date = new Date(this.options.commit.committer.date).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).slice(0, -2);
    // добавляем карточку в свойство объекта
      this.cardElement = this.create();
    }
  // верстаем карточку
    create() {
      const slide = document.createElement('a');
      slide.setAttribute('target', 'blank');
      slide.classList.add('swiper-slide');
      slide.insertAdjacentHTML('afterbegin', `<p class="swiper-slide__date gray-text card-text"></p>
      <div class="swiper-slide__about">
          <div class="swiper-slide__img"></div>
          <h3 class="swiper-slide__title h3-text"></h3>
          <p class="swiper-slide__subtitle card-text"></p>
      </div>
      <p class="swiper-slide__text card-text"></p>`);
      // наполняем карточку внешним контентом
      slide.setAttribute('href', `${this.options.html_url}`)
      slide.querySelector(".swiper-slide__img").style.backgroundImage = `url(${this.options.author.avatar_url})`;
      slide.querySelector('.swiper-slide__date').textContent = this.options.commit.committer.date;
      slide.querySelector(".swiper-slide__title").textContent = this.options.commit.committer.name;
      slide.querySelector(".swiper-slide__subtitle").textContent = this.options.commit.committer.email;
      slide.querySelector(".swiper-slide__text").textContent = this.options.commit.message;
      return slide;
    }
}