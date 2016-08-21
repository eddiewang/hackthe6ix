/**
*
* Post
*
*/

import React from 'react';

import styles from './styles.css';
import Text from 'components/Text';

import JoyEmoji from 'static/images/joy_emoji.svg';
import AngerEmoji from 'static/images/anger_emoji.svg';
import FearEmoji from 'static/images/fear_emoji.svg';
import SadnessEmoji from 'static/images/sadness_emoji.svg';
import SurpriseEmoji from 'static/images/surprise_emoji.svg';

class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.postContainer}>
        <div className={styles.post}>
          <Text type="post-headline">Monday, July 14th, 2016</Text>
          <div className={styles.selfie}>
            <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p160x160/11182059_10205498751161817_2415487134910777160_n.jpg?oh=95ae3f981e538d0ff0c16ef7b08cd298&oe=58498A1D" />
          </div>
          <Text type="post">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos cupiditate quo ad minus aspernatur suscipit similique eos consequatur asperiores corporis, perferendis impedit expedita, placeat, doloremque, omnis fuga officia sed excepturi?</Text>
          <Text type="post">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos cupiditate quo ad minus aspernatur suscipit similique eos consequatur asperiores corporis, perferendis impedit expedita, placeat, doloremque, omnis fuga officia sed excepturi?</Text>
        </div>
        <div className={styles.emojiContainer}>
          <ul>
            <li>

            <svg width="200" height="200">
              <linearGradient id="lg" x1="0.5" y1="1" x2="0.5" y2="0">
                  <stop offset="0%" stop-opacity="1" stop-color="blue"/>
                  <stop offset="40%" stop-opacity="1" stop-color="blue"/>
                  <stop offset="40%" stop-opacity="0" stop-color="blue"/>
                  <stop offset="100%" stop-opacity="0" stop-color="blue"/>
              </linearGradient>

            <circle cx="50" cy="50" r="45" fill="url(#lg)" stroke="crimson" stroke-width="5"/>
            </svg>

              <img src={JoyEmoji}/>
            </li>
            <li><img src={AngerEmoji}/></li>
            <li><img src={FearEmoji}/></li>
            <li><img src={SadnessEmoji}/></li>
            <li><img src={SurpriseEmoji}/></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Post;
