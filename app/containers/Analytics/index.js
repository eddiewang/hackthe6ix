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
  selectSurprise,
  selectSentiment,
  selectSum,
} from './selectors';
import styles from './styles.css';
import {Line, Pie} from 'react-chartjs-2';
import { selectPosts } from 'containers/Journal/selectors';
import { createStructuredSelector } from 'reselect';
import Text from 'components/Text';

export class Analytics extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data = {
      labels: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        this.props.joy,
        this.props.anger,
        this.props.fear,
        this.props.sadness,
        this.props.surprise,
      ]
    };
    const sentiment = {
      labels: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        this.props.sentiment
      ]
    };
    const pie = {
       labels: [
           "Joy",
           "Anger",
           "Fear",
           "Sadness",
           "Surprise"
       ],
       datasets: [
           {
               data: this.props.sum,
               backgroundColor: [
                "#b2d8ff",
                 "#d1ffb5",
                 "#adf9f4",
                 "#ebffae",
                 "#c6b7ff"
               ]
           }]
    };
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
        <div className={styles.secondPanel}>
          <div className={styles.mainLineChart}>
            <Text type="analytics-title">Trailing Happiness Data</Text>
            <Line
              data={sentiment}
              width={450}
              height={400}
              options={{
                legend: {
                  position: 'top',
                  display: false
                }
              }}
            />
          </div>
          <div className={styles.mainLineChart}>
            <Text type="analytics-title">Emotional Sum State</Text>
            <Pie
              data={pie}
              width={450}
              height={400}
              options={{
                legend: {
                  position: 'top'
                }
              }}
            />
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
  sentiment: selectSentiment(),
  sum: selectSum(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
