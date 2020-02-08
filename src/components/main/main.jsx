import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  const {
    count
  } = props;

  return (
    <>
      <h1>Объектов: {count}</h1>
    </>
  );
};

Main.propTypes = {
  count: PropTypes.number.isRequired
};

export default Main;
