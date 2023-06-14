import { produce } from 'immer';

const InitialState = {
	// users: [
	// 	{ id: 1, name: 'avraham', mail: 'avraham@gmail.com', password: 1234 },
	// ],
};
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
	default:
		return state;
	}
}, InitialState);