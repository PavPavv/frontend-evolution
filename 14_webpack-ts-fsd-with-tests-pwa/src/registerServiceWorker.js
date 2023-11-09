import { Workbox } from 'workbox-window';

export function registerServiceWorker() {
  // if ('serviceWorker' in navigator) {
  //   console.log('Tah-dah! registerServiceWorker works...');
  //   const wb = new Workbox('/sw.js');
  //   wb.register();
  // }

  if ('serviceWorker' in navigator) {
    console.log('serviceWorker here...');

    window.addEventListener('load', () => {
      console.log('serviceWorker loaded.');

      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}
