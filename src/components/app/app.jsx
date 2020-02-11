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

    // Function for future state change handling
    const onOfferHeadingClick = () => {
      // console.log(`Clicked on "${evt.target.textContent}"!`);
    };

    return <Main
      {...params}
      onOfferClick={onOfferHeadingClick}
    />;
  }
}

App.propTypes = {
  params: PropTypes.shape({
    offers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      isPremium: PropTypes.bool
    })).isRequired,
  })
};

export default App;
