import React from 'react';
import PropTypes from 'prop-types';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      count
    } = this.props;

    return (
      <>
        <h1>Объектов: {count}</h1>
      </>
    );
  }
}

Main.propTypes = {
  count: PropTypes.number.isRequired
};

export default Main;
