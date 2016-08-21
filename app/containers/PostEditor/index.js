/*
 *
 * PostEditor
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import { Editor } from 'draft-js';
import Text from 'components/Text';
import { getCurrentDate } from 'utils/date';

export class PostEditor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  render() {
    const currentDate = getCurrentDate();
    return (
      <div className={styles.editorContainer}>
        <Text type="editor-date">{currentDate}</Text>
        <div className={styles.editorWrapper}>
          <Editor editorState={this.props.editorState} onChange={(state) => this.props.handleChange(state)} />
        </div>
        <button className={styles.button}>Submit</button>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PostEditor);
