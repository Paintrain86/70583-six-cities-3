import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const params = {
  offersCount: 5
};

const container = document.querySelector(`#root`);

ReactDOM.render(
    <App
      params={params}
    />,
    container
);
