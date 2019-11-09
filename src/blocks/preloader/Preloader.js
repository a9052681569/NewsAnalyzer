export default class Preloader {
    // контейнер - это секция, в которую мы вставим прелоадер
    constructor(container) {
        this.container = container;
    }
    // метод отображает иконку загрузки данных
    preload() {
        this.container.classList.remove('hidden')
        // заменяем разметку контейнера на прелоадер, чтобы в любом случае заменить содержимое, а не вставить в поток
        this.container.innerHTML = `<div class="preloader preloader__img"></div>
        <h3 class="h3-text preloader__title"></h3>
        <p class="main-text preloader__subtitle">Идет поиск новостей...</p>`;
    }
    // метод отображает информацию о том что результатов поиска нет.
    notFound() {
        this.container.classList.remove('hidden')
        this.container.innerHTML = `<div class="preloader__not-found preloader__img"></div>
        <h3 class="h3-text preloader__title">Ничего не найдено</h3>
        <p class="main-text preloader__subtitle">К сожалению по вашему запросу ничего не найдено.</p>`;
    }
}