import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PostList from './PostList';

describe('<PostList />', () => {
  const defaultProps = {
    posts: [{
      id: 1,
      title: 'foo',
      body: 'bar',
      author: 'John Doe',
      updatedAt: new Date(2018, 3, 18),
    }, {
      id: 2,
      title: 'foo 2',
      body: 'bar 2',
      author: 'Jane Doe',
      updatedAt: new Date(2018, 3, 19),
    }],
  };

  it('renders posts', () => {
    const props = defaultProps;

    const wrapper = shallow(<PostList {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.box')).toHaveLength(2);
  });
});
