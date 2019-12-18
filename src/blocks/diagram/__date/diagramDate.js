export default class DiagramDate {
    constructor(arr) {
        this.elemArr = arr;
    }
    showDates() {
        let daysAgo = 6
        this.elemArr.forEach((item) => {
            item.textContent = `${new Date(new Date() - 24*3600*1000*(daysAgo--)).toLocaleString('ru', {
                weekday: 'short',
                day: 'numeric'
            }).split(', ').reverse().join(', ')}`
        })
    }
}