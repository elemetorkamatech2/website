import userReducer, { initialState } from './userReducer';
import { mockUserState, mockUserReducer } from './userReducer.mock';

describe('userReducer', () => {
  it('should update the username', () => {
    const action = { type: 'UPDATE_USERNAME', payload: 'Jane Smith' };
    const newState = userReducer(initialState, action);
    const mockNewState = mockUserReducer(mockUserState, action);

    expect(newState).toEqual(mockNewState);
  });
});