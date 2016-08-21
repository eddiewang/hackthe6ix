/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import messages from './messages';

import styles from './styles.css';
import Text from 'components/Text';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.changeRoute = this.changeRoute.bind(this);
  }
  changeRoute() {
    this.props.changeRoute('/app/journal');
  }
  render() {
    return (
      <div onClick={this.changeRoute} className={styles.container} >
        <div className={styles.logo}>
          <div>
          <Text type="logo">reflct</Text>
          </div>
          <Text type="logo-sub">Track your state of mind <br /> A self tracking Diary</Text>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeRoute: (url) => dispatch(push(url)),
  }
);

export default connect(null, mapDispatchToProps)(HomePage);