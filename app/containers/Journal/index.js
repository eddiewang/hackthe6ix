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
import cx from 'classnames';

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
      const stringData = rawData.blocks.map((block) => block.text).join('\\n');
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
    this.setState({isNewPost: false});
    const newState = EditorState.createEmpty();
    this.onChange(newState);
  }

  renderPosts() {
    var postArray = [];
    Object.keys(this.props.posts.posts).forEach((key) => {
      console.log(key)
      postArray.push(
        <div id={key}>
          <Post keywords={this.props.posts.posts[key].keywords} emotions={this.props.posts.posts[key].emotions} key={key} date={this.props.posts.posts[key].date} data={this.props.posts.posts[key].stringState.split(/\r\n|\r|\n/g)} />
        </div>
      );
    });
    return postArray.reverse();
  }

  renderPostBlock() {
    var postArray = [];
    Object.keys(this.props.posts.posts).forEach((key) => {
      postArray.push(

        <a className={styles.link} href={`#${key}`}>
          <PostBlock key={key} date={this.props.posts.posts[key].dateAlt} data={this.props.posts.posts[key].stringState.split(/\r\n|\r|\n/g)} />
        </a>
      );
    });
    return postArray.reverse();
  }

  render() {
    const {editorState} = this.state;
    let cn = cx(styles.iconpluscross, {
      [styles.isactive]: this.state.isNewPost
    });
    return (
      <div className={styles.journal}>
        { this.state.isNewPost ?
          <div className={styles.newPostModal}>
            <PostEditor handleIndicoClick={this.handleIndicoClick} editorState={this.state.editorState} handleChange={this.onChange}/>
          </div> :
          null
        }
        <div className={styles.postBlockContainer}>
          {this.props.posts.posts ?this.renderPostBlock() :null}
        </div>
        <div className={styles.postsContainer}>
          {this.props.posts.posts ? this.renderPosts() : null }
        </div>
          <a onClick={this.handleClick} className={`${styles.addPost}`}>
            <div className={cn}>
            </div>
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
