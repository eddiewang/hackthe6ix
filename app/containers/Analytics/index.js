/*
 *
 * Analytics
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAnalytics from './selectors';
import styles from './styles.css';
import {Line} from 'react-chartjs-2';
import { selectPosts } from 'containers/Journal/selectors';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Joy',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export class Analytics extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.analytics}>
        <div className={styles.lineChartPanel}>
          <div className={styles.mainLineChart}>
            <Line
              data={data}
              width={900}
              height={500}
            />
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

const mapStateToProps = selectPosts();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
