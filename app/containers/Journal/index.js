/*
 *
 * Journal
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectJournal from './selectors';
import styles from './styles.css';

import Text from 'components/Text';
import Post from 'components/Post';
import PostBlock from 'components/PostBlock';
import PostEditor from 'containers/PostEditor';
import { Editor, EditorState } from 'draft-js';
import * as moment from 'moment';

export class Journal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isNewPost: false,
      editorState: EditorState.createEmpty(),
    }
    this.handleClick = this.handleClick.bind(this);
    this.onChange = (editorState) => this.setState({editorState});
  }

  handleClick() {
    this.setState({isNewPost: !this.state.isNewPost});
  }

  render() {
    const {editorState} = this.state;
    return (
      <div className={styles.journal}>
        { this.state.isNewPost ?
          <div className={styles.newPostModal}>

            <PostEditor editorState={this.state.editorState} handleChange={this.onChange}/>
          </div> :
          null
        }
        <div className={styles.postBlockContainer}>
          <PostBlock />
          <PostBlock />
          <PostBlock />
          <PostBlock />
          <PostBlock />
          <PostBlock />
          <PostBlock />
        </div>
        <div className={styles.postsContainer}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
          <a onClick={this.handleClick} className={styles.addPost}>
          </a>
      </div>
    );
  }
}

const mapStateToProps = selectJournal();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal);
