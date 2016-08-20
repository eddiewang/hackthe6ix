/**
*
* PostBlock
*
*/

import React from 'react';

import styles from './styles.css';
import Text from 'components/Text';

class PostBlock extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.postBlock}>
        <Text type="block-date">08/03/16</Text>
        <Text type="block-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum magni sed sit voluptatem nam dolorum rerum modi accusantium quo quos eum, laudantium, assumenda in odit quaerat praesentium distinctio? Quo, quas.</Text>
      </div>
    );
  }
}

export default PostBlock;
