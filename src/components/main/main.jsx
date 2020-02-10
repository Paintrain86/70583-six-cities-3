import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  const {
    offers,
    onOfferClick
  } = props;

  const defaultImage = `https://dvnak.ru/upload/old/photos/medium/bbe7280e8e0d144e5e7710286e7ccc45.jpg`;

  return (
    <>
      <div className="offers" style={{display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
        {offers.map((offer) => {
          return (
            <div className="offers__item" key={offer.id} style={{width: `30%`}}>
              <img className="offers__item-img" src={(offer.image) ? offer.image : defaultImage} alt={offer.title} style={{maxWidth: `100%`}} />
              <h4 className="offers__item-title" onClick={onOfferClick}>{offer.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string
  })),
  onOfferClick: PropTypes.func
};

export default Main;
