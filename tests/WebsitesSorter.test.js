import React from 'react';
import { render, fireEvent } from 'react-testing-library';
   import {WebsitesSorter} from '../src/Components/WebsitesSorter'; 

   test('Sorting buttons should update the data accordingly', () => {
    // Render the component
    const { getByText, getByTestId } = render(<WebsitesSorter />);
  
    // Click the "Show Sorting Options" button to display the sorting buttons
    fireEvent.click(getByText('Show Sorting Options'));
  
    // Click the "Sort by Name" button
    fireEvent.click(getByTestId('Name-sort'));
  
    // Check if the data is sorted by name
    const sortedByName = /* get the updated data */
    expect(sortedByName).toEqual(/* expected sorted data */);
  
    // Click the "Sort by Date" button
    fireEvent.click(getByTestId('Date-sort'));
  
    // Check if the data is sorted by date
    const sortedByDate = /* get the updated data */
    expect(sortedByDate).toEqual(/* expected sorted data */);
  });
   