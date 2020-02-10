import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

describe(`Main`, () => {
  it(`Should be rendered correctly`, () => {
    const testSettings = {
      offers: [
        {
          id: 1,
          title: `Little cozy trash can`,
          image: `https://cdnmedia.220-volt.ru/content/products/337/337834/images/thumb_220/n1200x800_q80/1.jpeg`
        },
        {
          id: 2,
          title: `Amazing hotel beach resort`,
          image: `https://img1.coastalliving.timeinc.net/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2016/11/main/coastalhotels_0215_09.jpg`
        },
        {
          id: 3,
          title: `Famous japanese boxes`,
          image: ``
        }
      ],
      onOfferClick: jest.fn()
    };

    const markup = renderer
      .create(<Main {...testSettings}/>)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
