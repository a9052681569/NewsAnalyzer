import {ChartList} from '../blocks/chart-list/chartList';
import ContentChanger from '../blocks/contentChanger/contentChanger';
import DiagramDate from '../blocks/diagram/__date/diagramDate';

import '../css/analytics.css';

// проставляем даты в диаграмме
new DiagramDate(document.querySelectorAll('.diagram__date')).showDates();
// заставляем диаграмму работать
new ChartList(document.querySelectorAll('.chart-list__cell-value'));
// меняем заголовок на содержание запроса
new ContentChanger(document.querySelector('.analytics__title'), `Вы спросили: «${localStorage.getItem('searchValue')}»`).showValue();
// указываем общее кол-во новостей по этому запросу
new ContentChanger(document.querySelector('.stat__value_total'), `${JSON.parse(localStorage.searchResult).totalResults}`).showValue();
// указываем кол-во упоминаний в заголовках 
new ContentChanger(document.querySelector('.stat__value_headers'), localStorage.getItem('searchValue'), JSON.parse(localStorage.searchResult).articles).showValueInTitles();
// указываем месяц в верхней части диаграммы
new ContentChanger(document.querySelector('.diagram__month'), `(${new Date().toLocaleString('ru', {month: 'long'})})`).showValue()