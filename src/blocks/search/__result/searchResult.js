import Preloader from '../../preloader/Preloader';
import resSuccess from './__success/searchSuccess';

const preloader = new Preloader(document.querySelector('.search__result'));
let res = true;
// после клика по кнопке поиска отрисовываем нужные результаты
export default document.querySelector('.search__bar-button').addEventListener('click', () => {
    // вместо res будет запрос на сервер, если он успешен - отрисовываем результаты
    if (res) {
        preloader.preload();
        // отрисовываем окно результатов
        resSuccess.render();
        // вставляем карточки(добавляются по 3)
        resSuccess.cardlist.render();
    // если запрос не прошел - отрисовываем ошибку поиска
    } else {
        preloader.preload();
        preloader.notFound();
    }
})