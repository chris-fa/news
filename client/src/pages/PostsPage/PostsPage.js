import React from 'react';
import { connect } from 'react-redux';

export class PostsPage extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div class="container">
        <h1 class="title is-1">Posts</h1>
        { posts.map(post =>
          <div class="box">
            <h4 class="title is-4">{ post.title }</h4>
            <h6 class="subtitle is-6">{ `By ${post.author} at ${post.updatedAt.toLocaleDateString('en-US')}` }</h6>

            <figure class="image is-4by3">
              <img src={ post.image } alt={ post.title }/>
            </figure>

            <p>{ post.body }</p>
          </div>
        )}
      </div>
    );
  }
};

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
});

export default connect()(PostsPage);
