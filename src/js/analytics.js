import {ChartList} from '../blocks/analytics/__diagram/__container/__table/__chart-list/table__chart-list';


import '../css/analytics.css';

// создаем экземпляр класса диаграммы, задавая конкретный элемент разметки
new ChartList(document.querySelectorAll('.chart-list__cell__value'));