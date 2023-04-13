import SimpleComponent from '../base/SimpleComponent';

class Title extends SimpleComponent {
  title: string;

  constructor(title = '') {
    super();
    this.title = title;
  }

  getTemplate() {
    return `
      <section>
        <a>Test</a>
        <h1>${this.title}</h1>
      </section>
    `;
  }

  build() {
    return this.getTemplate();
  }

  applyLogic() {}
}

export default Title;
