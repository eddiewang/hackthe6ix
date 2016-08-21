/**
*
* PostBlock
*
*/

import React from 'react';

import styles from './styles.css';
import Text from 'components/Text';

class PostBlock extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.postBlock}>
        <Text type="block-date">{this.props.date}</Text>
        <Text type="block-preview">{this.props.data[0].split('\\n').join(' ')}</Text>
      </div>
    );
  }
}

export default PostBlock;
