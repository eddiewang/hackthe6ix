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
  (state) => {
    const sorted = [];

    for (var key in state.posts.posts) {
      sorted.push([key, state.posts.posts[key]])
    }

    const chronoArray = sorted.sort(
        function(a, b) {
            return Date.parse(a[1].exactDate) - Date.parse(b[1].exactDate);
        }
    );

    return chronoArray;
  }
);
export default selectJournal;
export {
  selectJournalDomain,
  selectJournal,
  selectPosts
};
