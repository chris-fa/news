import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import { PostsPage } from '../pages/PostsPage';

import 'bulma/css/bulma.css';

storiesOf('PostsPage', module)
  .add('Shows posts', () => {
    const props = {
      posts: [{
        id: 1,
        title: 'Nature is beautify',
        body: 'Lorem ipsum here',
        image: 'http://lorempixel.com/640/480/nature/',
        author: 'John Doe',
        updatedAt: new Date(2018, 3, 15, 14, 15),
      }, {
        id: 2,
        title: 'Go Sports!',
        body: 'Lorem ipsum here',
        image: 'http://lorempixel.com/640/480/sports/',
        author: 'Jane Doe',
        updatedAt: new Date(2018, 3, 18, 19, 32),
      }],
    };

    return (
      <section class="section">
        <PostsPage { ...props } />
      </section>
    )
  });
