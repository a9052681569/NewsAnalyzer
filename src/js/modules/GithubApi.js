export default class GithubApi {
    commitsRequest() {
        return fetch('https://api.github.com/repos/a9052681569/NewsAnalyzer/commits')
        .then((res) => res.ok ? res.json() : Promise.reject())
    }
}