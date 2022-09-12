export class GithubUser {
    static search(user) {
        const endpoint = `https://api.github.com/users/${user}`

        return fetch(endpoint)
        .then(data => data.json()) 
        .then(user => ({
            login: user.login,
            username: user.name,
            repositories: user.public_repos,
            followers: user.followers,
        }))
    }
}