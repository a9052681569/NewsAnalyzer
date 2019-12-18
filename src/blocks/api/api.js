import Preloader from '../preloader/Preloader'

export default class Api {
    constructor(container, searchValue) {
        this.searchValue = searchValue;
        this.container = container
    }
    searchRequest() {
        const weekAgo = new Date(new Date() - 24*3600*1000*7).toISOString();
        const now = new Date().toISOString();
        return fetch(`https://newsapi.org/v2/everything?q=${this.searchValue}&from=${weekAgo}&to=${now}&pageSize=100&language=ru&apiKey=36cc28b52dd94123854bc39a30738736`)
        .then((res) => res.ok ? res.json() : Promise.reject())
        .catch((err) => {
            console.log(err)
            new Preloader(this.container).error();
        })
    }
    commitsRequest() {
        return fetch('https://api.github.com/repos/a9052681569/NewsAnalyzer/commits')
        .then((res) => res.ok ? res.json() : Promise.reject())
        .catch((err) => {
            console.log(err)
            new Preloader(this.container).error();
        })
    }
}