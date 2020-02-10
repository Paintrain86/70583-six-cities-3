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
    offers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string
    })),
    defaultProps: PropTypes.exact({
      image: PropTypes.string.isRequired
    }).isRequired
  })
};

export default App;
