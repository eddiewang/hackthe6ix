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
import { Editor, EditorState, convertToRaw } from 'draft-js';

import { editPost, indicoSubmit, fetchPosts} from './actions';

export class Journal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isNewPost: false,
      editorState: EditorState.createEmpty(),
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleIndicoClick = this.handleIndicoClick.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.onChange = (editorState) => {
      const contentState = editorState.getCurrentContent();
      const rawData = convertToRaw(contentState);
      const stringData = rawData.blocks.map((block) => block.text).join();
      this.props.dispatch(editPost({rawData, stringData}));
      this.setState({editorState});
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchPosts());
  }

  handleClick() {
    this.setState({isNewPost: !this.state.isNewPost});
  }

  handleIndicoClick() {
    this.props.dispatch(indicoSubmit());
  }

  renderPosts() {
    Object.keys(this.props.posts.posts).forEach((key) => {
      return (<Post data={this.props.posts.posts[key].contentState} />);
    })
  }

  render() {
    const {editorState} = this.state;
    return (
      <div className={styles.journal}>
        { this.state.isNewPost ?
          <div className={styles.newPostModal}>
            <PostEditor handleIndicoClick={this.handleIndicoClick} editorState={this.state.editorState} handleChange={this.onChange}/>
          </div> :
          null
        }
        <div className={styles.postBlockContainer}>
          <PostBlock />
        </div>
        <div className={styles.postsContainer}>
          {this.props.posts.posts ? this.renderPosts() : null }
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
