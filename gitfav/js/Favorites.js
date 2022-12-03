export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {

    this.entries = [
      {
        login: 'alexjjunio',
        name: 'Alex Junio',
        public_repos: '76',
        followers: '1200'
      },
      
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '86',
        followers: '1300'
      }
    ]

  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')
    this.update()
  }
  
  update() {
    this.removeAllTr()
    
    
    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositorios').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      row.querySelector('.user a').href = `https://github.com/${user.login}`

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')

        if(isOk){
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })


  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {tr.remove()})
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `          
      <td class="user">
        <img src="https://github.com/maykbrito.png" alt="Imagem de Mayk Brito">
        <a target = "_blank" href="">
          <p>Mayk Brito</p>
          <span>/maykbrito</span>
        </a>
      </td>

      <td class="repositorios">
        123
      </td>

      <td class="followers">
        1234
      </td>

      <td class="action">
        <button class="remove">Remover</button>
      </td>
    `
    return tr
  }
}