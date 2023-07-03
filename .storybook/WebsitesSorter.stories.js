import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {WebsitesSorter} from '../src/Components/WebsitesSorter';

storiesOf('WebsitesSorter', module)
  .add('With Data', () => {
    const exampleData = [
      { id: 1, name: 'Website 1', date: '2020-01-01' },
      { id: 2, name: 'Website 2', date: '2020-02-01' },
      { id: 3, name: 'Website 3', date: '2020-03-01' },
    ];

    return <WebsitesSorter data={exampleData} />;
  });
// storiesOf('WebsitesSorter', module)
//   .add('Default', () => <WebsitesSorter />)
//   .add('Sorted by Name', () => <WebsitesSorter />)
//   .add('Sorted by Date', () => <WebsitesSorter />);