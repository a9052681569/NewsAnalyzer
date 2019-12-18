import Preloader from '../preloader/Preloader';
import Success from './__success/searchSuccess';
import Api from '../api/api';

export default class Search {
    constructor(searchForm, requestValue) {
        //форма поиска
        this.form = searchForm;
        // значение поиска
        this.form.requestValue = requestValue;
        // при первой загрузке меняем сообщение об ошибке на кастомное
        this.handler();
        // валидируем форму при вводе текста
        this.form.requestValue.addEventListener('input', this.handler)
        // после сабмите формы запускается поиск
        this.form.addEventListener('submit', this.search)
    }
    // метод реализует функционал поиска новостей
    search(event) {
        // избегаем перезагрузки страницы
        event.preventDefault();        
        //отрисовываем прелоадер пока идет загрузка
        preloader.preload();
        //делаем запрос на сервер
        new Api(document.querySelector('.search__result'), this.requestValue.value).searchRequest()
        .then((res) => {
            // записываем результат поиска в localStorage для дальнейшего доступа с других страниц
            localStorage.setItem('searchResult', JSON.stringify(res))
            localStorage.setItem('searchValue', this.requestValue.value);
            if (res.articles.length > 0) {
                // создаем экземпляр класса успешного поиска
                const resSuccess = new Success(document.querySelector('.search__result'), res.articles);
                // отрисовываем окно результатов
                resSuccess.render();
                // отрисовываем карточки
                resSuccess.cardlist.render();
            // если в запросе не оказалось карточек - показываем это пользователю
            } else {
                preloader.notFound();
            }
        })
    }
    // метод валидирует инпут поиска
    handler() {
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

const preloader = new Preloader(document.querySelector('.search__result'));