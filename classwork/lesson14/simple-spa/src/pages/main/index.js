import model from './model';

export default class MainPage {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('main-page');
    model.subscribe(this.onChangeModel);

    this.render();
  }

  getItemHTML(item) {
    return `<li>${item.title}</li>`;
  }

  getListHTML() {
    return `
      <ul>
        ${model.data.list.map(this.getItemHTML).join('')}
      </ul>
    `;
  }

  getPageHTML() {
    return `${this.getListHTML()}
      <div>
        <button id="update">update</button>
        <button id="update-2">update2</button>
        <button id="update=3">update3</button>
      </div>
    `
  }

  updateData = () => {
    // loading from server
    model.data = {
      list: [
        {
          id: Math.random(),
          title: Math.random()
        },
        {
          id: Math.random(),
          title: Math.random()
        },
        {
          id: Math.random(),
          title: Math.random()
        }
      ]
      }
  };

  onChangeModel = () => {
    console.log('onChangeModel from main page');

    this.render();
  };

  render() {
    this.element.innerHTML = this.getPageHTML();
    this.element
      .querySelector('#update')
      .addEventListener('click', this.updateData);
  }
}
