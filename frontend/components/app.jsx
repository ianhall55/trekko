import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        Trekko React
      </div>
    );
  }
}

export default withRouter(App);
