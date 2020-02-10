import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const params = {
  defaultParams: {
    image: `https://dvnak.ru/upload/old/photos/medium/bbe7280e8e0d144e5e7710286e7ccc45.jpg`
  }
};

const container = document.querySelector(`#root`);

ReactDOM.render(
    <App
      params={params}
    />,
    container
);
