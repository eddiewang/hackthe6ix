import { createSelector } from 'reselect';

/**
 * Direct selector to the mainApp state domain
 */
const selectMainAppDomain = () => state => state.get('app');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainApp
 */

const selectMainApp = () => createSelector(
  selectMainAppDomain(),
  (substate) => substate.toJS()
);

export default selectMainApp;
export {
  selectMainAppDomain,
};
