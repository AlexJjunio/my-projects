export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
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
    this.createRow()
    
    const row = this.createRow()
    
    this.tbody.append(row)

    row.querySelector('.user img').src = `https://github.com/alexjjunio.png`
    row.querySelector('.user p').textContent = `Alex Junio`
    row.querySelector('.user span').textContent = `/alexjjunio`
    row.querySelector('.repositorios').textContent = `1000`
    row.querySelector('.followers').textContent = `1000`
    row.querySelector('.user a').href = `https://github.com/alexjjunio`
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