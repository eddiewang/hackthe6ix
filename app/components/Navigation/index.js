/**
*
* Navigation
*
*/

import React from 'react';
import { Link } from 'react-router';
import Text from 'components/Text';

import styles from './styles.css';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p160x160/11182059_10205498751161817_2415487134910777160_n.jpg?oh=95ae3f981e538d0ff0c16ef7b08cd298&oe=58498A1D" />
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link activeClassName={styles.activeLink} to='/app/journal'><span>Journal</span></Link>
            </li>
            <li>
              <Link activeClassName={styles.activeLink} to="/app/analytics"><span>Analytics</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
