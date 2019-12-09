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
      slide.insertAdjacentHTML('afterbegin', `<p class="swiper-slide__date gray-text card-text"></p>
      <div class="swiper-slide__about">
          <div class="swiper-slide__img"></div>
          <h3 class="swiper-slide__title h3-text"></h3>
          <p class="swiper-slide__subtitle card-text"></p>
      </div>
      <p class="swiper-slide__text card-text"></p>`);
      // наполняем карточку внешним контентом
      slide.querySelector(".swiper-slide__img").style.backgroundImage = `url(${this.options.link})`;
      slide.querySelector('.swiper-slide__date').textContent = this.options.date;
      slide.querySelector(".swiper-slide__title").textContent = this.options.title;
      slide.querySelector(".swiper-slide__subtitle").textContent = this.options.subtitle;
      slide.querySelector(".swiper-slide__text").textContent = this.options.text;
      return slide;
    }
}