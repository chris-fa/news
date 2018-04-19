import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PostsPage } from './PostsPage';
import PostList from './PostList';

describe('<PostsPage />', () => {
  const defaultProps = {
    isLoading: false,
    errorMessage: null,
    posts: [],
  };

  it('renders a <PostList>', () => {
    const props = {
      ...defaultProps,
      posts: [{}],
    };

    const wrapper = shallow(<PostsPage { ...props } />);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find(PostList)).toExist();
  });
});
