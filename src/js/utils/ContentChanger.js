export default class ContentChanger {
    constructor(el, value, arr) {
        this.el = el;
        this.value = value;
        this.arr = arr;
    }
    showValue() {
        this.el.textContent = `${this.value}`
    }
    // метод ищет в заголовке каждого элемента передаваемого массива искомое значение, 
    // возвращает кол-во совпадений
    _getValueInTitles() {
        return this.arr.reduce((sum, item) => {
            item.title.includes(this.value) ? sum += 1 : ''
            return sum
        }, 0)
    }
    showValueInTitles() {
        this.el.textContent = `${this._getValueInTitles()}`
    }
}