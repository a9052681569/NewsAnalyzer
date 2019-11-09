
// подключаем плагин
import Swiper from 'swiper';
// подключаем прелоадер
import Preloader from '../preloader/Preloader';
// подключили класс, отрисовывающий слайды
import Slide from './__container/__slide/swiper__slide';
// переменнная в будущем будет ответом сервера, переключает отображение слайдов или прелоадер
let res = true;
// инициируем работу слайдера
const slider = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    slidesPerView: 'auto',
    observer: true
});
// массив карточек для отрисовки, пока нет работы с сервером
const cards = [
    {
        link: 'https://fanparty.ru/fanclubs/avatar-2009/gallery/85164_avatar_2009.jpg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        subtitle: 'kzkzk.ру'
    },
    {
        link: 'https://w-dog.ru/wallpapers/16/17/547557012563074/avatar-avatara-nejtiri.jpg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        subtitle: 'kzkzk.ру'
    },
    {
        link: 'https://wallbox.ru/wallpapers/main/201138/neytiri-na39vi-avatar-7a244de.jpg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        subtitle: 'kzkzk.ру'
    },
    {
        link: 'https://w-dog.ru/wallpapers/16/18/531657912161328.jpg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        subtitle: 'kzkzk.ру'
    },
    {
        link: 'https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        subtitle: 'kzkzk.ру'
    },
    {
        link: 'https://miro.medium.com/max/1078/1*T2dSNTYqCuocSgsUqIzWMQ.jpeg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        subtitle: 'kzkzk.ру'
    },
];

export default (function() {
    if(res) { 
        // если сервер ответил вставляем карточки с параметрами из ответа в слайдер
        cards.forEach((options) => {
            slider.appendSlide(`${new Slide(options).create().outerHTML}`)
        })
    } else {
        // если ошибка вставляем прелоадер
        new Preloader(document.querySelector('.swiper-container')).notFound();
    }
})();

