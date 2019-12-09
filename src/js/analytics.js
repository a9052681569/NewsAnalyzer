import {ChartList} from '../blocks/chart-list/chart-list';


import '../css/analytics.css';

// создаем экземпляр класса диаграммы, задавая конкретный элемент разметки
new ChartList(document.querySelectorAll('.chart-list__cell-value'));