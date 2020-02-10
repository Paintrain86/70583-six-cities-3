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
    defaultParams: PropTypes.exact({
      image: PropTypes.string.isRequired
    }).isRequired,
    offers: PropTypes.array
  })
};

export default App;
