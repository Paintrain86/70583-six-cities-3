import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Main`, () => {
  it(`Headings should be clickable!`, () => {
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

    const app = shallow(<Main {...testSettings}/>);

    app.find(`.place-card__name a`).forEach((node) => {
      node.simulate(`click`, {
        preventDefault: () => {}
      });
    });

    expect(testSettings.onOfferClick).toHaveBeenCalledTimes(3);
  });
});
