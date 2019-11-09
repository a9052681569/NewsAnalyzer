export class ChartList {
    constructor(arr) {
        // подразумевается что arr - псевдомассив из html елементов
        this.elemArr = Array.from(arr);
        // valuesArr - массив значений элементов входного псевдомассива arr
        this.valuesArr = this.elemArr.reduce((res, elem) => {
            res.push(elem.textContent);
            return res;
        }, []);

        this.render();
    }
    // находим наибольшее значение из показателей диаграммы, оно будет браться за 100% показатель
    findBiggestValue() {
        return Math.max.apply(null, this.valuesArr);
    }
    // отрисовываем ширину элементов диаграммы в зависимости от их значений
    render() {
        this.elemArr.forEach(item => item.parentNode.style.width = item.textContent / this.findBiggestValue() * 100 + '%')
    }
}