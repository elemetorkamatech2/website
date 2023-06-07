
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import WebsiteList from './WebsiteList';

export const actions = {
  onClick: action('onClick'),
};

storiesOf('WebsiteList', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <WebsiteList
      title={text('Title', 'Website List')}
      showButton={boolean('Show Button', true)}
      {...actions}
    />
  ));