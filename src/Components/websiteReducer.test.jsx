import websiteReducer, { initialState } from './websiteReducer';
import { mockWebsiteState, mockWebsiteReducer } from './websiteReducer.mock';

describe('websiteReducer', () => {
  it('should add a new website', () => {
    const action = { type: 'ADD_WEBSITE', payload: { id: 4, name: 'YouTube', url: 'https://www.youtube.com/', icon: 'youtube.png', permissions: ['user'] } };
    const newState = websiteReducer(initialState, action);
    const mockNewState = mockWebsiteReducer(mockWebsiteState, action);

    expect(newState).toEqual(mockNewState);
  });
});