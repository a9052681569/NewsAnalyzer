export default class Search {
    constructor(searchForm, requestValue, container, searchButton, searchSuccess, preloader, newsApi) {
        this.form = searchForm;
        this.requestValue = requestValue;
        this.container = container
        this.searchButton = searchButton
        this.searchSuccess = searchSuccess
        this.preloader = preloader
        this.newsApi = newsApi
        this._search = this._search.bind(this);
        this._handler = this._handler.bind(this)
        // при первой загрузке меняем сообщение об ошибке на кастомное
        this._handler();
        // валидируем форму при вводе текста
        this.requestValue.addEventListener('input', this._handler)
        // после сабмите формы запускается поиск
        this.form.addEventListener('submit', this._search)
    }
    // при загрузке страницы отрисовывает последние результаты поиска
    showLastRequest() {
        if (localStorage.getItem('searchValue')) {
            this.requestValue.value = localStorage.getItem('searchValue');
            this._handler()
            const articles = JSON.parse(localStorage.getItem('searchResult')).articles;
            articles.length > 0 ? this.searchSuccess.initialRender(articles, this.container) : this.preloader.notFound(this.container);
        }
    }
    // метод реализует функционал поиска новостей
    _search(event) {
        // избегаем перезагрузки страницы
        event.preventDefault();       
        // отрисовываем прелоудер пока идет загрузка
        this.preloader.preload(this.container)
        // блокируем поля формы пока идет загрузка
        this.requestValue.setAttribute('disabled', 'true');
        this.searchButton.setAttribute('disabled', 'true');

        this.newsApi.searchRequest(this.requestValue.value)
        .then((res) => {
            // записываем результат поиска в localStorage для дальнейшего доступа с других страниц
            localStorage.setItem('searchResult', JSON.stringify(res))
            localStorage.setItem('searchValue', this.requestValue.value);
            // если в ответе есть статьи - отрисовываем их, если нет - показываем это пользователю
            res.articles.length > 0 ? this.searchSuccess.initialRender(res.articles, this.container) : this.preloader.notFound(this.container);
        })
        .catch((err) => {
            console.log(err)
            this.preloader.error(this.container);
        })
        .finally(() => {
            this.requestValue.removeAttribute('disabled');
            this.searchButton.removeAttribute('disabled');
        })
    }
    // метод валидирует инпут поиска
    _handler() {
        // сразу меняем сообщение ошибки на кастомное
        this.requestValue.setCustomValidity('Нужно ввести ключевое слово')
        // если инпут пустой меняем сообщение ошибки на кастомное
        if (this.requestValue.validity.valueMissing) {
            this.requestValue.setCustomValidity('Нужно ввести ключевое слово')
        } else {
        // если форма валидная - сбрасываем сообщение об ошибке
            this.requestValue.setCustomValidity('')
        }
    }
}