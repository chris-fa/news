import React from 'react';

const PostList = ({ posts }) => (
  <div>
    { posts.map(post =>
      <div key={ post.id } className="box">
        <h4 className="title is-4">{ post.title }</h4>
        <h6 className="subtitle is-6">{ `By ${post.author} at
          ${post.updatedAt.toLocaleDateString('en-US')}` }</h6>

        <figure className="image is-4by3">
          <img src={ post.image } alt={ post.title }/>
        </figure>

        <p>{ post.body }</p>
      </div>
    )}
  </div>
);

export default PostList;
