export default class SearchSuccess {
    constructor(cardList) {
        this._appendRender = this._appendRender.bind(this)
        this.cardList = cardList
    }
    initialRender(cards, container) {
        // делаем результаты поиска видимыми
        container.classList.remove('hidden');
        // при повторном поиске сначала удаляем старый слушатель, а потом отрисовываем новую разметку
        this.moreButton ? this.moreButton.removeEventListener('click', this._appendRender) : '';
        // отрисовываем разметку успешного поиска
        container.textContent = ''
        container.insertAdjacentHTML('afterbegin', `<div class="search__success section section-container">
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
        this.cardList.takeProps(container.querySelector('.cardlist'), cards)
        this.cardList.render()
        
        this.moreButton = container.querySelector('.more-button')
        
        // после отрисовки привязываем обработчик клика кнопке
        this.moreButton.addEventListener('click', this._appendRender)
    }
    _appendRender(event) {
        this.cardList.render();
        // прячем кнопку если больше нет карточек
        if (this.cardList.cards.length <= 0) {
            event.target.classList.add('hidden')
        }
    }
}