export default class NewsApi {
    constructor(timeRange) {
        this.timeRange = timeRange
    }
    searchRequest(searchValue) {
        const timeAgo = new Date(new Date() - this.timeRange).toISOString();
        const now = new Date().toISOString();
        return fetch(`https://newsapi.org/v2/everything?q=${searchValue}&from=${timeAgo}&to=${now}&pageSize=100&language=ru&apiKey=36cc28b52dd94123854bc39a30738736`)
        .then((res) => res.ok ? res.json() : Promise.reject())
    }
}