import { createSelector } from 'reselect';
import { selectPosts } from 'containers/Journal/selectors';
/**
 * Direct selector to the analytics state domain
 */
const selectAnalyticsDomain = () => state => state.get('analytics');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Analytics
 */

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

 const ogDataSet = {
   label: 'Joy',
   fill: false,
   lineTension: 0.1,
   backgroundColor: '',
   borderColor: '',
   data: [65, 59, 80, 81, 56, 55, 40]
 }

const coreColors = {
  joy: '#ebffae',
  anger: '#d1ffb5',
  fear: '#adf9f4',
  sadness: '#b2d8ff',
  surprised: '#c6b7ff',
}
const selectAnalytics = () => createSelector(
  selectAnalyticsDomain(),
  (substate) => substate.toJS()
);

const selectJoy = () => createSelector(
  selectPosts(),
  (posts) => {
    const joy = [];
    posts.map((each) => {
      joy.push(each[1].emotions.joy)
    });
    let dataSet = {...ogDataSet}
    dataSet.label = 'Joy';
    dataSet.data = joy;
    dataSet.borderColor = coreColors.joy;
    dataSet.backgroundColor = coreColors.joy;
    return dataSet;
  }
);

const selectAnger = () => createSelector(
  selectPosts(),
  (posts) => {
    const anger = [];
    posts.map((each) => {
      anger.push(each[1].emotions.anger)
    });
    let dataSet = {...ogDataSet}
    dataSet.label = 'Anger';
    dataSet.data = anger;
    dataSet.borderColor = coreColors.anger;
    dataSet.backgroundColor = coreColors.anger;
    return dataSet;
  }
);

const selectFear = () => createSelector(
  selectPosts(),
  (posts) => {
    const fear = [];
    posts.map((each) => {
      fear.push(each[1].emotions.fear)
    });
    let dataSet = {...ogDataSet}
    dataSet.label = 'Fear';
    dataSet.data = fear;
    dataSet.borderColor = coreColors.fear;
    dataSet.backgroundColor = coreColors.fear;
    return dataSet;
  }
);

const selectSadness = () => createSelector(
  selectPosts(),
  (posts) => {
    const sadness = [];
    posts.map((each) => {
      sadness.push(each[1].emotions.sadness)
    });
    let dataSet = {...ogDataSet}
    dataSet.label = 'Sadness';
    dataSet.data = sadness;
    dataSet.borderColor = coreColors.sadness;
    dataSet.backgroundColor = coreColors.sadness;
    return dataSet;
  }
);

const selectSurprise = () => createSelector(
  selectPosts(),
  (posts) => {
    const surprise = [];
    posts.map((each) => {
      surprise.push(each[1].emotions.surprise)
    });
    let dataSet = {...ogDataSet}
    dataSet.label = 'Surprise';
    dataSet.data = surprise;
    dataSet.borderColor = coreColors.surprise;
    dataSet.backgroundColor = coreColors.surprise;
    return dataSet;
  }
);




export default selectAnalytics;
export {
  selectAnalyticsDomain,
  selectJoy,
  selectAnger,
  selectFear,
  selectSadness,
  selectSurprise,
};
