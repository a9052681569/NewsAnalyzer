import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm.js';
import Api from '../api/api';
import Slide from '../swiper-slide/swiper-slide';

export default class Slider {
    constructor(container) {
        this.container = container;
    }
    // создает разметку слайдера
    create() {
        const swiperSection = document.createElement('section');
        swiperSection.classList.add('swiper', 'section');
        swiperSection.insertAdjacentHTML('afterbegin', `<div class="swiper__header section__header section-container">
        <h2 class="h2-text section__header-title">История коммитов из GitHub</h2>
        <a href="https://github.com/a9052681569/NewsAnalyzer/commits" target="blank" class="section__header-link link swiper__link">
            <p class="main-text">Открыть в  Github</p>
            <div class="link__img swiper__link-img"></div>
        </a>
        </div>
        <div class="swiper__container">
            <div class="swiper-wrapper"></div>
            <div class="swiper__button_prev swiper__button"></div>
            <div class="swiper__button_next swiper__button"></div>
            <div class="section__side-rect section__side-rect_left"></div>
            <div class="section__side-rect section__side-rect_right"></div>
        </div>
        <div class="swiper__pagination"></div>`);
        return swiperSection;
    }
    // вставляет разметку слайдера в указанный контейнер 
    render() {
        this.container.appendChild(this.create())
    }
    // определяет настройки слайдера
    settings() {
        Swiper.use([Navigation, Pagination]);
        this.slider = new Swiper('.swiper__container', {
            pagination: {
              el: '.swiper__pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper__button_next',
              prevEl: '.swiper__button_prev',
            },
            freeMode: true,
            slidesPerView: 'auto',
            observer: true
        });
    }
    // запрашивает коммиты с гитхаба и подгружает их в виде слайдов
    getSlides() {
        new Api(document.querySelector('.swiper__container')).commitsRequest()
        .then((commits) => {
            commits.forEach((options) => {
                this.slider.appendSlide(`${new Slide(options).create().outerHTML}`)
            })
        }) 
    }
    // инициирует работу слайдера
    init() {
        // отрисовываем разметку
        this.render();
        // применяем настройки слайдера
        this.settings()
        // отрисовываем слайды
        this.getSlides()
    }
}



