import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { AllWebsite } from './AllWebsite';
import { GetWebsitesApi } from '../Api/api';

jest.mock('../Api/api');

describe('AllWebsite', () => {
  it('should render a list of websites', async () => {
    const mockWebsites = [
      { title: 'Websitee', 
      description: "A new website for testing purposes",
      typeOfDomain: "my-example-domain.co.uk",
      cpu: 686,
      memory: 16,
      userId: "user123",
      status: "pending",
      backups:[]}
    ];
    GetWebsitesApi.mockResolvedValue(mockWebsites);

    const { getByText } = render(<AllWebsite />);

    await waitFor(() => {
      expect(getByText('Websiteee')).toBeInTheDocument();
      expect(getByText('Websiteeee')).toBeInTheDocument();
    });
  });

//   it('should render "No data" when there are no websites', async () => {
//     GetWebsitesApi.mockResolvedValue([]);

//     const { getByText } = render(<AllWebsite />);

//     await waitFor(() => {
//       expect(getByText('No data')).toBeInTheDocument();
//     });
//   });
});