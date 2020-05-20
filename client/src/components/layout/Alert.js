import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
  // What is this propTypes for?
};

const mapStateToProps = (state) => ({
  alerts: state.alert
  // we want to access alert from reducers index.js.
  // Now we can get alerts by destructring in const Alert as a props
});

export default connect(mapStateToProps)(Alert);
