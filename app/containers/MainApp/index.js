/*
 *
 * MainApp
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectMainApp from './selectors';
import styles from './styles.css';

import Navigation from 'components/Navigation';

export class MainApp extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.mainApp}>
        <Navigation />
        <div className={styles.mainContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectMainApp();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
