import MainPage from 'src/pages/main';
import MainPageComponent from 'src/pages/main/component';

export default class Application {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('application');

    this.mainPage = new MainPage();
    this.mainPageComponent = new MainPageComponent();
    this.element.append(this.mainPage.element, this.mainPageComponent.element);
  }
}
