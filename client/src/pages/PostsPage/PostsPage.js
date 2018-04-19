import React from 'react';
import { connect } from 'react-redux';

import PostList from './PostList';

export class PostsPage extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="container">
        <h1 className="title is-1">Posts</h1>
        <PostList posts={ posts } />
      </div>
    );
  }
};

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
});

export default connect()(PostsPage);
