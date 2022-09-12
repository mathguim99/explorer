import { GithubUser } from "./GithubUser.js"

class Favorites {
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@gitfav:')) || []
    }

    save() {
        localStorage.setItem('@gitfav:', JSON.stringify(this.entries))
    }

    async add(user) {
        try {
            const userAlreadyExists = this.entries
                .find(entry => entry.login.toLowerCase() === user.toLowerCase())
            
            if (userAlreadyExists) {
                throw new Error('Usuário já cadastrado!')
            }
            
            const userToSearch = await GithubUser.search(user)

            if (userToSearch.login) {
                this.entries = [userToSearch, ...this.entries]
                this.update()
                this.save()
            } else {
                throw new Error('Usuário não encontrado!')
            }
        } catch(error) {
            alert(error.message)
        }
    }

    delete(user) {
        const newEntries = this.entries
            .filter(entry => entry.login !== user.login)
        this.entries = newEntries
        this.update()
        this.save()
    }
}

export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector('tbody')
        
        this.update()
        this.clickFavoriteButton()
    }

    clickFavoriteButton() {
        const favoriteButton = document.querySelector('#search button')
        favoriteButton.onclick = () => {
            const userToAdd = document.querySelector('#search input').value
            this.add(userToAdd)
        }
    }

    update() {
        this.removeAllRows()

        this.entries.forEach((user) => {
            const row = this.createRow(user)

            row.querySelector('a').href = `http://github.com/${user.login}`
            row.querySelector('img').src = `http://github.com/${user.login}.png`
            row.querySelector('img').alt = `Profile photo of ${user.username}`
            row.querySelector('h1').textContent = user.username
            row.querySelector('p').textContent = user.login
            row.querySelector('.repositories').textContent = user.repositories
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('button').onclick = () => {
                const isOkToDelete = confirm('The user will be deleted. Do you confirm?')

                if (isOkToDelete) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })

        if (this.entries.length == 0) {
            const holder = this.placeholder()
            holder.id = 'holder'
            this.tbody.append(holder)
        }
    }

    createRow() {
        const row = document.createElement('tr')
        
        row.innerHTML = `
            <td>
            <a href="http://github.com/maykbrito">
                <img src="http://github.com/maykbrito.png" alt="Profile photo of Mayk Brito">
                <div>
                    <h1>Mayk Brito</h1>
                    <p>/maykbrito</p>
                </div>
            </a>
            </td>
            <td class="repositories">123</td>
            <td class="followers">1234</td>
            <td><button>Remove</button></td>
        `

        return row;
    }

    placeholder() {
        const placeholderRow = document.createElement('tr')

        placeholderRow.innerHTML = `
            <td colspan="4">
                <div id="placeholder">
                    <img src="img/Estrela.svg" alt="">
                    <h2>Nenhum favorito ainda</h2>
                </div>
            </td>
        `

        return placeholderRow;
    }

    removeAllRows() {
        this.tbody.querySelectorAll('tr').forEach((row) => {row.remove()})
    }
}
