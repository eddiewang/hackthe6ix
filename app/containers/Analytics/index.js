/*
 *
 * Analytics
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import {
  selectJoy,
  selectAnger,
  selectFear,
  selectSadness,
  selectSurprise, } from './selectors';
import styles from './styles.css';
import {Line} from 'react-chartjs-2';
import { selectPosts } from 'containers/Journal/selectors';
import { createStructuredSelector } from 'reselect';
import Text from 'components/Text';

export class Analytics extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        this.props.joy,
        this.props.anger,
        this.props.fear,
        this.props.sadness,
        this.props.surprise,
      ]
    };
    console.log(data)
    return (
      <div className={styles.analytics}>
        <div className={styles.lineChartPanel}>
          <div className={styles.mainLineChart}>
            <Text type="analytics-title">12 Month Emotional Data</Text>
            <Line
              data={data}
              width={900}
              height={500}
              options={{
                legend: {
                  position: 'top'
                }
              }}
            />
          </div>
        </div>
        <div className={styles.statsPanel}>
          <div className={styles.sentiment}>
            <Text type="sentiment">32.3</Text>
          </div>
        </div>
        <div className={styles.pieChartsPanel}>
          <div className={styles.pieChart}>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts(),
  joy: selectJoy(),
  anger: selectAnger(),
  fear: selectFear(),
  sadness: selectSadness(),
  surprise: selectSurprise(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
