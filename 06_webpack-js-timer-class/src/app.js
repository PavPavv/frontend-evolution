class App {
  constructor(rootElemStr = 'body', widgetsArr = []) {
    this.rootElemStr = rootElemStr;
    this.widgets = widgetsArr;
  }
  run() {
    const rootElem = document.querySelector(this.rootElemStr);
    for (const widget of this.widgets) {
      rootElem.insertAdjacentHTML('beforeend', widget.build());
      const isComplicated = widget.isLogical;
      if (isComplicated) {
        widget.applyLogic();
      }
    }
  }
}

export default App;
