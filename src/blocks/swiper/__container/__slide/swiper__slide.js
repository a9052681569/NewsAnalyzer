export default class SwiperSlide {
    constructor(options) {
      this.options = options;
    // добавляем карточку в свойство объекта
      this.cardElement = this.create();
    }
  // верстаем карточку
    create() {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.insertAdjacentHTML('afterbegin', `<p class="slide__date card-text"></p>
      <div class="slide__about">
          <div class="slide__about__img"></div>
          <h3 class="slide__about__title h3-text"></h3>
          <p class="slide__about__subtitle card-text"></p>
      </div>
      <p class="slide__text card-text"></p>`);
      // наполняем карточку внешним контентом
      slide.querySelector(".slide__about__img").style.backgroundImage = `url(${this.options.link})`;
      slide.querySelector('.slide__date').textContent = this.options.date;
      slide.querySelector(".slide__about__title").textContent = this.options.title;
      slide.querySelector(".slide__about__subtitle").textContent = this.options.subtitle;
      slide.querySelector(".slide__text").textContent = this.options.text;
      return slide;
    }
}