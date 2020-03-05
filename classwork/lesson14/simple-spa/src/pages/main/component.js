import model from './model';

export default class Component {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('component-page');
    model.subscribe(this.onChangeModel);

    this.render();
  }

  getItemHTML(item) {
    return `<span>${item.title}</span>`;
  }

  getListHTML() {
    return `
      <div>
        ${model.data.list.map(this.getItemHTML).join('')}
      </div>
    `;
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
    console.log('onChangeModel from component');

    this.render();
  };

  render() {
    this.element.innerHTML = this.getListHTML();
  }
}
