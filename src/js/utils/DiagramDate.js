export default class DiagramDate {
    constructor(dates) {
        this.dates = dates;
    }
    showDates() {
        let daysAgo = 6
        this.dates.forEach((date) => {
            date.textContent = `${new Date(new Date() - 24*3600*1000*(daysAgo--)).toLocaleString('ru', {
                weekday: 'short',
                day: 'numeric'
            }).split(', ').reverse().join(', ')}`
        })
    }
}