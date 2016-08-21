import { createSelector } from 'reselect';

/**
 * Direct selector to the journal state domain
 */
const selectJournalDomain = () => state => state.get('journal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Journal
 */

const selectJournal = () => createSelector(
  selectJournalDomain(),
  (substate) => substate.toJS()
);

const selectPosts = () => createSelector(
  selectJournal(),
  (state) => state.posts.toJS()
);
export default selectJournal;
export {
  selectJournalDomain,
  selectJournal,
  selectPosts
};
