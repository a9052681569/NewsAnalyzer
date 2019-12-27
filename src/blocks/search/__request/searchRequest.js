export default class SearchRequest {
    constructor(searchValue) {
        this.searchValue = searchValue;
        this.weekAgo = new Date(new Date() - 24*3600*1000*7).toISOString();
        this.now = new Date().toISOString();
    }
    request() {
        localStorage.setItem('searchValue', this.searchValue);
        return fetch(`https://newsapi.org/v2/everything?q=${this.searchValue}&from=${this.weekAgo}&to=${this.now}&pageSize=100&language=ru&apiKey=36cc28b52dd94123854bc39a30738736`)
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject();
        })
        .catch(err => console.log(err));
    }
}