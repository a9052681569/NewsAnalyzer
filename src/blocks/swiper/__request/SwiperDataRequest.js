export default class SwiperDataRequest {
    request() {
        return fetch('https://api.github.com/repos/a9052681569/NewsAnalyzer/commits')
            .then((res) => {
                return res.ok ? res.json() : Promise.reject();
            })
            .catch(err => console.log(err));
    }
}
