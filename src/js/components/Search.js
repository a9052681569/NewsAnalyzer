import preloader from './preloader';
import searchSuccess from './searchSuccess';
import NewsApi from '../modules/NewsApi';

export default class Search {
    constructor(searchForm, requestValue, container, searchButton, timeLimit) {
        // форма поиска
        this.form = searchForm;
        // значение поиска
        this.form.requestValue = requestValue;
        // контейнер для отрисовки результатов
        this.form.container = container
        this.form.searchButton = searchButton
        this.form.searchTimeLimit = timeLimit
        // при первой загрузке меняем сообщение об ошибке на кастомное
        this._handler();
        // валидируем форму при вводе текста
        this.form.requestValue.addEventListener('input', this._handler)
        // после сабмите формы запускается поиск
        this.form.addEventListener('submit', this._search)
    }
    // при загрузке страницы отрисовывает последние результаты поиска
    showLastRequest(cardsPerClick) {
        this.form.cardsPerClick = cardsPerClick
        if (localStorage.getItem('searchValue')) {
            this.form.requestValue.value = localStorage.getItem('searchValue');
            const articles = JSON.parse(localStorage.getItem('searchResult')).articles;
            articles.length > 0 ? searchSuccess.initialRender(articles, this.form.container, this.form.cardsPerClick) : preloader.notFound(this.form.container);
        }
    }
    // метод реализует функционал поиска новостей
    _search(event) {
        // избегаем перезагрузки страницы
        event.preventDefault();       
        //отрисовываем прелоудер пока идет загрузка
        preloader.preload(this.container)
        // блокируем поля формы пока идет загрузка
        this.requestValue.setAttribute('disabled', 'true');
        this.searchButton.setAttribute('disabled', 'true');
        //делаем запрос на сервер
        
        NewsApi.searchRequest(this.requestValue.value, this.searchTimeLimit)
        .then((res) => {
            // записываем результат поиска в localStorage для дальнейшего доступа с других страниц
            localStorage.setItem('searchResult', JSON.stringify(res))
            localStorage.setItem('searchValue', this.requestValue.value);
            
            // если в ответе есть статьи - отрисовываем их, если нет - показываем это пользователю
            res.articles.length > 0 ? searchSuccess.initialRender(res.articles, this.container, this.cardsPerClick) : preloader.notFound(this.container);
        })
        .catch((err) => {
            console.log(err)
            preloader.error(this.container);
        })
        .finally(() => {
            this.requestValue.removeAttribute('disabled');
            this.searchButton.removeAttribute('disabled');
        })
    }
    // метод валидирует инпут поиска
    _handler() {
        //сразу меняем сообщение ошибки на кастомное
        this.form.requestValue.setCustomValidity('Нужно ввести ключевое слово')
        // если инпут пустой меняем сообщение ошибки на кастомное
        if (this.form.requestValue.validity.valueMissing) {
            this.form.requestValue.setCustomValidity('Нужно ввести ключевое слово')
        } else {
        // если форма валидная - сбрасываем сообщение об ошибке
            this.form.requestValue.setCustomValidity('')
        }
        
    }
}