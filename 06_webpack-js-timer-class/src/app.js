import title from './components/title/title';
import timer from './components/timer/timer';

const app = () => {
  const element = document.createElement('div');
  element.classList.add('container');
  element.setAttribute('id', 'root');
  element.appendChild(title('Test'));
  element.appendChild(timer());
  return element;
};

export default app;
