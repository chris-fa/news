import RealConnectedPostsPage from './PostsPage';
import { PostsPage as RealPostsPage } from './PostsPage';

import ConnectedPostsPage from './index';
import { PostsPage } from './index';

describe('index', () => {
  it('exports ConnectedPostsPage as a default export', () => {
    expect(ConnectedPostsPage).toBe(RealConnectedPostsPage);
  });

  it('exports Post as a named export', () => {
    expect(PostsPage).toBe(RealPostsPage);
  });
});
