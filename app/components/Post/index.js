/**
*
* Post
*
*/

import React from 'react';

import styles from './styles.css';
import Text from 'components/Text';
import { Editor, convertFromRaw, EditorState } from 'draft-js';
class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.rehydrateContentState = this.rehydrateContentState.bind(this);
  }
  rehydrateContentState() {
    console.log(this.props.data);
    const hydrateState = convertFromRaw(this.props.data);
    const editorState = EditorState.getCurrentContent(hydrateState);
    return (<Editor editorState={editorState} />);
  }
  render() {
    return (
      <div className={styles.postContainer}>
        <div className={styles.post}>
          <Text type="post-headline">Monday, July 14th, 2016</Text>
          <div className={styles.selfie}>
            <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p160x160/11182059_10205498751161817_2415487134910777160_n.jpg?oh=95ae3f981e538d0ff0c16ef7b08cd298&oe=58498A1D" />
          </div>
          {this.rehydrateContentState()}
        </div>
      </div>
    );
  }
}

export default Post;
