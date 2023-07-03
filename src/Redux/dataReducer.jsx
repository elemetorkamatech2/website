import { produce } from 'immer';

const InitialState = {};

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
		case 'SET_WEB':
		state.web = action.payload;
debugger
		break;
	default:
		return state;
	}
}, InitialState);