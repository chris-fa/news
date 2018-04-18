import React from 'react';
import { connect } from 'react-redux';

export class Posts extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
};

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
});

export default connect()(Posts);
