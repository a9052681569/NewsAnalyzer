export class ChartList {
    constructor(arr) {
        // подразумевается что arr - псевдомассив из html елементов
        this.elemArr = Array.from(arr);    
        this.setValue()
        this.render();
    }
    // собираем значения линий диаграммы в массив
    getValues() {
        return this.elemArr.reduce((res, elem) => {
            res.push(elem.textContent);
            return res;
        }, [])
    }
    // находим наибольшее значение из показателей диаграммы, оно будет браться за 100% показатель
    findBiggestValue() {
        return Math.max.apply(null, this.getValues());
    }
    // отрисовываем ширину элементов диаграммы в зависимости от их значений
    render() {
        this.elemArr.forEach(item => item.parentNode.style.width = item.textContent / this.findBiggestValue() * 100 + '%')
    }
    // вычисляем значения линий диаграммы
    calc(elementDate) {
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
    // устанавливаем найденные значения в элементы линий диаграммы
    setValue() {
        this.elemArr.forEach((item, index) => {
           item.textContent = `${this.calc(document.querySelectorAll('.diagram__date')[index].textContent)}`
        })
    }
}