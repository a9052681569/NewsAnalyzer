class NewsApi {
    searchRequest(searchValue, timeRange) {
        const timeAgo = new Date(new Date() - timeRange).toISOString();
        const now = new Date().toISOString();
        return fetch(`https://newsapi.org/v2/everything?q=${searchValue}&from=${timeAgo}&to=${now}&pageSize=100&language=ru&apiKey=36cc28b52dd94123854bc39a30738736`)
        .then((res) => res.ok ? res.json() : Promise.reject())
    }
}

export default new NewsApi();