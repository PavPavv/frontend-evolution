import Widget from './components/base/Widget';

class App {
  rootElemStr: string;
  widgets: Widget[];

  constructor(rootElemStr = 'body', widgetsArr: Array<Widget>) {
    this.rootElemStr = rootElemStr;
    this.widgets = widgetsArr;
  }
  run(): void {
    const rootElem = document.querySelector(this.rootElemStr);
    if (rootElem) {
      for (const widget of this.widgets) {
        rootElem.insertAdjacentHTML('beforeend', widget.build());
        const isComplicated = widget.isLogical;
        if (isComplicated) {
          widget.applyLogic();
        }
      }
    }
  }
}

export default App;
