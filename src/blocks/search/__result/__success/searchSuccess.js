import cardlist from '../../../cardlist/cardlist';

class Success {
    constructor(container, cards) {
        this.container = container;
        this.cards = cards;
    }
    render() {
        // делаем результаты поиска видимыми
        this.container.classList.remove('hidden');
        // отрисовываем разметку успешного поиска
        this.container.innerHTML = `<div class="search__success section">
        <div class="section__header">
            <h2 class="h2-text section__header-title">Результаты поиска</h2>
            <a href="./analytics.html" class="section__header-link link">
                <p class="main-text">Посмотреть аналитику</p>
                <div class="link__img"></div>
            </a>
        </div>
        <div class="cardlist"></div>
        <button class="more-button main-text">Показать еще</button>
    </div>`
        // после отрисовки связываем разметку с классом сетки карточек
        this.cardlist = new cardlist(this.container.querySelector('.cardlist'), this.cards)
        // после отрисовки привязываем обработчик клика кнопке
        this.container.querySelector('.more-button').addEventListener('click', () => {
            this.cardlist.render();   
        })
    }
}
// массив карточек для отрисовки, пока нет работы с сервером
const cards = [
    {
        link: 'http://st.gde-fon.com/wallpapers_original/558235_park_derevya_doroga_pole_gazon_3216x2136_www.Gde-Fon.com.jpg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'Лента.ру'
    },
    {
        link: 'https://avatars.mds.yandex.net/get-pdb/1893403/89c89810-4251-4ad7-8c1d-361ff5ed0188/s1200?webp=false',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'Лента.ру'
    },
    {
        link: 'https://wallpaperscave.ru/images/original/17/11-24/animals-cat-1994.jpg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'Лента.ру'
    },
    {
        link: 'https://img1.goodfon.ru/original/2560x1600/a/f7/okean-gorizont-nebo-oblaka-3851.jpg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'Лента.ру'
    },
    {
        link: 'https://avatars.mds.yandex.net/get-zen_doc/57035/pub_5d162df1d7427500ad004418_5d163cf58f0b3300ad5ab55e/scale_1200',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'Лента.ру'
    },
    {
        link: 'https://s1.1zoom.ru/big3/651/347350-admin.jpg',
        date: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'kzkzk.ру'
    }
];

// создаем экземпляр успешного поиска и экспортируем его
export default new Success(document.querySelector('.search__result'), cards);