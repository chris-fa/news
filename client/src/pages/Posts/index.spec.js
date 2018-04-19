import RealPosts from './Posts';
import Posts from './index';

describe('index', () => {
  it('exports Post as its default', () => {
    expect(Posts).toBe(RealPosts);
  });
});
