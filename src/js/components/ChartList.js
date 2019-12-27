export default class ChartList {
    constructor(nodeList) {
        this.elems = Array.from(nodeList);    
    }
    // собираем значения линий диаграммы в массив
    _getValues() {
        return this.elems.reduce((res, elem) => {
            res.push(elem.textContent);
            return res;
        }, [])
    }
    // находим наибольшее значение из показателей диаграммы, оно будет браться за 100% показатель
    _findBiggestValue() {
        return Math.max.apply(null, this._getValues());
    }
    // отрисовываем ширину элементов диаграммы и цифровые значения
    render() {
        this.elems.forEach((item, index) => {
            item.textContent = `${this._calc(document.querySelectorAll('.diagram__date')[index].textContent)}`
        })
        this.elems.forEach(item => item.parentNode.style.width = item.textContent / this._findBiggestValue() * 100 + '%')
    }
    // вычисляем значения линий диаграммы
    _calc(elementDate) {
        // проходимся по массиву статей
        return JSON.parse(localStorage.searchResult).articles.reduce((sum, item) => {
            //если дата на диаграмме совпадает с датой статьи - идем дальше
            if (elementDate === new Date(item.publishedAt).toLocaleString('ru', {
                weekday: 'short',
                day: 'numeric'
            }).split(', ').reverse().join(', ')) {
                  // если запрос упоминался в заголовке статьи - увеличиваем значение линии диаграммы
                if (item.title.includes(localStorage.getItem('searchValue'))) {
                    sum += 1;
                }
                // если запрос упоминался в теле статьи - увеличиваем значение линии диаграммы
                if (item.description.includes(localStorage.getItem('searchValue'))) {
                    sum += 1;
                }
            }
            return sum
        }, 0)
    }
}