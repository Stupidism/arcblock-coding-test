import ReactDOM from 'react-dom/client';

import App from './app';

const appElement = document.getElementById('app');

if (!appElement) {
  throw new Error('No #app element found in document');
}

const root = ReactDOM.createRoot(appElement);
root.render(<App />);
