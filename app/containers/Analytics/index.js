/*
 *
 * Analytics
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAnalytics from './selectors';
import styles from './styles.css';

export class Analytics extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.analytics}>
      </div>
    );
  }
}

const mapStateToProps = selectAnalytics();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
