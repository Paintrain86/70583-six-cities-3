import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const params = {
  defaultProps: {
    image: `https://dvnak.ru/upload/old/photos/medium/bbe7280e8e0d144e5e7710286e7ccc45.jpg`
  },
  offers: [
    {
      id: 1,
      title: `Little cozy trash can`,
      image: `https://cdnmedia.220-volt.ru/content/products/337/337834/images/thumb_220/n1200x800_q80/1.jpeg`,
      isPremium: true
    },
    {
      id: 2,
      title: `Amazing hotel beach resort`,
      image: `https://img1.coastalliving.timeinc.net/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2016/11/main/coastalhotels_0215_09.jpg`,
      isPremium: false
    },
    {
      id: 3,
      title: `Famous japanese boxes`,
      image: ``,
      isPremium: true
    }
  ]
};

const container = document.querySelector(`#root`);

ReactDOM.render(
    <App
      params={params}
    />,
    container
);
