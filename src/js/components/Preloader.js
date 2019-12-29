export default class Preloader {
    constructor() {
        this.element = this._create();
    }
    _create() {
        const preloader = document.createElement('div');
        preloader.classList.add('preloader', 'section-container');
        preloader.insertAdjacentHTML('afterbegin', `<div class="preloader__img"></div>
        <h3 class="h3-text preloader__title"></h3>
        <p class="main-text preloader__subtitle gray-text"></p>`);
        return preloader;
    }
    // метод отображает иконку загрузки данных
    preload(container) {
        container.classList.remove('hidden')
        // заменяем разметку контейнера на прелоадер, чтобы в любом случае заменить содержимое, а не вставить в поток
        container.textContent = '';
        this.element.querySelector('.preloader__title').textContent = '';
        this.element.querySelector('.preloader__subtitle').textContent = 'Идет поиск новостей...';
        this.element.querySelector('.preloader__img').classList.remove('preloader__img_not-found');
        this.element.querySelector('.preloader__img').classList.add('preloader__img_loading');
        container.appendChild(this.element);
    }
    // метод отображает информацию о том что результатов поиска нет.
    notFound(container) {
        container.classList.remove('hidden')
        container.textContent = '';
        this.element.querySelector('.preloader__title').textContent = 'Ничего не найдено';
        this.element.querySelector('.preloader__subtitle').textContent = 'К сожалению по вашему запросу ничего не найдено.';
        this.element.querySelector('.preloader__img').classList.remove('preloader__img_loading');        
        this.element.querySelector('.preloader__img').classList.add('preloader__img_not-found');
        container.appendChild(this.element);
    }
    error(container) {
        container.classList.remove('hidden')
        container.textContent = '';
        this.element.querySelector('.preloader__title').textContent = 'Во время запроса произошла ошибка.';
        this.element.querySelector('.preloader__subtitle').textContent = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
        this.element.querySelector('.preloader__img').classList.remove('preloader__img_loading');        
        this.element.querySelector('.preloader__img').classList.add('preloader__img_not-found');
        container.appendChild(this.element);
    }
}

