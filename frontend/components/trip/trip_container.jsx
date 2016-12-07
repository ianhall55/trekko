import React from 'react';
import {connect} from 'react-redux';
import Trip from './trip';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip);
