import CardList from './cardList';

class Success {
    initialRender(cards, container, cardsPerClick) {
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
        CardList.takeProps(container.querySelector('.cardlist'), cards)
        CardList.render(cardsPerClick)
        
        this.moreButton = container.querySelector('.more-button')
        this.moreButton.cardsPerClick = cardsPerClick;
        // после отрисовки привязываем обработчик клика кнопке
        this.moreButton.addEventListener('click', this._appendRender)
    }
    _appendRender() {
        CardList.render(this.cardsPerClick);
        // прячем кнопку если больше нет карточек
        if (CardList.cards.length <= 0) {
            this.classList.add('hidden')
        }
    }

}

export default new Success()