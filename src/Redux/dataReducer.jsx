import { produce } from 'immer';

const InitialState = { token: null, userId: null };

export const dataReducer = produce((state = InitialState, action) => {
	switch (action.type) {
		case 'SET_USERS':
			state.users = action.payload;
			break;
		case 'ADD_NEW_USER':
			state.users.push(action.payload);
			break;
		case 'SET_DETAILS_USER':
			state.users = action.payload;
			break;
		case 'SET_TOKEN':
			state.token = action.payload;
			break;
		case 'SET_USER_ID':
			state.userId = action.payload;
			break;
		default:
			return state;
	}
}, InitialState);