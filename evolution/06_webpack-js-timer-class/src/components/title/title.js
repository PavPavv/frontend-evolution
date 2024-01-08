import SimpleComponent from '../base/SimpleComponent';

class Title extends SimpleComponent {
  constructor(title = '') {
    super();
    this.isLogical = false;
    this.title = title;
  }

  getTemplate() {
    return `
      <section>
        <a href="#">Main</a>
        <h1>${this.title}</h1>
      </section>
    `;
  }

  build() {
    return this.getTemplate();
  }
}

export default Title;
