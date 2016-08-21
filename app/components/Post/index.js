/**
*
* Post
*
*/

import React from 'react';

import styles from './styles.css';
import Text from 'components/Text';
import { Editor, convertFromRaw, EditorState } from 'draft-js';

import joy from 'static/images/joy_emoji.svg';
import anger from 'static/images/anger_emoji.svg';
import fear from 'static/images/fear_emoji.svg';
import sadness from 'static/images/sadness_emoji.svg';
import surprise from 'static/images/surprise_emoji.svg';

class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.rehydrateContentState = this.rehydrateContentState.bind(this);
  }
  rehydrateContentState() {
    return this.props.data[0].split('\\n').map(function(item) {
      return (
        <Text key={item} type="post">
          {item}
        </Text>
      )
    })
  }
  filterTopEmotions() {
    const sortable = [];
    for (var emotion in this.props.emotions)
          sortable.push([emotion, this.props.emotions[emotion]])
    const emotionArray = sortable.sort(
        function(a, b) {
            return a[1] - b[1]
        }
    );

    return (
      <div className={styles.emotions}>
        {(() => {
          switch (emotionArray[0][0]) {
            case 'fear':
              return <li><img src={fear}/></li>
            case 'joy':
              return <li><img src={joy}/></li>
            case 'anger':
              return <li><img src={anger}/></li>
            case 'sadness':
              return <li><img src={sadness}/></li>
            case 'surprise':
              return <li><img src={surprise}/></li>
            default:
              return <li><img src={"#"}/></li>
          }

        })()
        }
      </div>);
  }
  render() {
    return (
      <div className={styles.postContainer}>
        <div className={styles.post}>
          <Text type="post-headline">{this.props.date}</Text>
          <div className={styles.selfie}>
            <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p160x160/11182059_10205498751161817_2415487134910777160_n.jpg?oh=95ae3f981e538d0ff0c16ef7b08cd298&oe=58498A1D" />
          </div>
          {this.props.data ? this.rehydrateContentState() : null}
          {this.props.emotions ? this.filterTopEmotions() : null}
        </div>
      </div>
    );
  }
}

export default Post;
