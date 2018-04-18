import React from 'react';
import { shallow } from 'enzyme';

import { Posts } from './Posts';

describe('<Posts />', () => {
  it('passes smoke test', () => { // smoke test
    const wrapper = shallow(<Posts />);

    expect(wrapper).toContainReact(<div>Hello World</div>);
  });
});
