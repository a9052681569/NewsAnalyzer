import cardlist from '../../cardlist/cardlist';

export default class Success {
    constructor(container, cards) {
        this.container = container;
        this.cards = cards;
    }
    render() {
        
        // делаем результаты поиска видимыми
        this.container.classList.remove('hidden');
        // отрисовываем разметку успешного поиска
        this.container.textContent = '';
        this.container.insertAdjacentHTML('afterbegin', `<div class="search__success section section-container">
        <div class="section__header">
            <h2 class="h2-text section__header-title">Результаты поиска</h2>
            <a href="./analytics.html" class="section__header-link link">
                <p class="main-text">Посмотреть аналитику</p>
                <div class="link__img"></div>
            </a>
        </div>
        <div class="cardlist"></div>
        <button class="more-button main-text">Показать еще</button>
    </div>`)
        // после отрисовки связываем разметку с классом карточек
        this.cardlist = new cardlist(this.container.querySelector('.cardlist'), this.cards)
        // после отрисовки привязываем обработчик клика кнопке
        this.container.querySelector('.more-button').addEventListener('click', () => {
            this.cardlist.render();
            // прячем кнопку если больше нет карточек
            if (this.cardlist.cards.length <= 0) {
                this.container.querySelector('.more-button').classList.add('hidden')
            }
        })
    }
}