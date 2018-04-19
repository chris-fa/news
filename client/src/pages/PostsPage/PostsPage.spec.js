import React from 'react';
import { shallow } from 'enzyme';

import { PostsPage } from './PostsPage';

describe('<PostsPage />', () => {
  it('passes smoke test', () => { // smoke test
    const wrapper = shallow(<PostsPage posts={ [] } />);
  });
});
