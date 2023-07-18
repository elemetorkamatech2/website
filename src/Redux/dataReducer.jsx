import { produce } from 'immer';

const InitialState = {
	token: null, userId: null,
	// userId: "user123",
	web: [
		{
			userId: 1,
			title: 'aaa',
			description: 'aaa',
			type_of_domain: 'qwert',
			cpu: 'qwert',
			memory: '123452',
			status: 'qwer'
		},
		{
			userId: 4,
			title: 'bbb',
			description: 'bbb',
			type_of_domain: '66666',
			cpu: 'bbb',
			memory: '123456',
			status: 'bbb'
		},
		{
			userId: 3,
			title: 'uuu',
			description: 'uuu',
			type_of_domain: 'uuu',
			cpu: 'uuu',
			memory: '777777',
			status: 'uuu'
		},
		{
			userId: 2,
			title: 'ccc',
			description: 'ccc',
			type_of_domain: 'ccc',
			cpu: 'ccc',
			memory: '00000',
			status: 'ccc'
		},],
	users: [
		{ id: 1, name: 'avraham', mail: 'avraham@gmail.com', password: 1234 },
	],

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
		case 'SET_WEB':
			state.web = action.payload;
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
