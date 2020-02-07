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

    return <Main count={params.offersCount} />;
  }
}

App.propTypes = {
  params: PropTypes.shape({
    offersCount: PropTypes.number
  })
};

export default App;
