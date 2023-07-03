import { produce } from 'immer';

const InitialState = {web :[
	{
		id: 1,
		title: 'aaa',
		description: 'aaa',
		type_of_domain: 'qwert',
		cpu: 'qwert',
		memory: '123452',
		status: 'qwer'
	},
	{
		id: 4,
		title: 'bbb',
		description: 'bbb',
		type_of_domain: '66666',
		cpu: 'bbb',
		memory: '123456',
		status: 'bbb'
	},
	{
		id: 3,
		title: 'uuu',
		description: 'uuu',
		type_of_domain: 'uuu',
		cpu: 'uuu',
		memory: '777777',
		status: 'uuu'
	},
	{
		id: 2,
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
// web:[{id:1,name:'kids',adress:'Jerusalem',categury:'clothing'}]
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
	default:
		return state;
	}
}, InitialState);

 