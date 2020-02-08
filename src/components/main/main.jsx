import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  const {
    offersCount
  } = props;

  return <h1>Объектов: {offersCount}</h1>;
};

Main.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default Main;
