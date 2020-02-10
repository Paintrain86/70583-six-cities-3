import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      params
    } = this.props;

    return <Main offers={params.offers} />;
  }
}

App.propTypes = {
  params: PropTypes.shape({
    offers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string
    }))
  })
};

export default App;
