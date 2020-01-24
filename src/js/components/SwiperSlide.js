export default class SwiperSlide {
    // верстаем карточку
    _create() {
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
      return slide;
    }
    getSlide(options) {
      const slide = this._create();
      // наполняем карточку внешним контентом
      slide.setAttribute('href', options.html_url)
      slide.querySelector(".swiper-slide__img").style.backgroundImage = `url(${options.author.avatar_url})`;
      slide.querySelector('.swiper-slide__date').textContent = new Date(options.commit.committer.date).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).slice(0, -2);
      slide.querySelector(".swiper-slide__title").textContent = options.commit.committer.name;
      slide.querySelector(".swiper-slide__subtitle").textContent = options.commit.committer.email;
      slide.querySelector(".swiper-slide__text").textContent = options.commit.message;
      return slide;
    }
}