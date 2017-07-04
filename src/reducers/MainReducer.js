import { dataStore } from '../store/data';

export default function MainReducer( state = dataStore, action) {
	if (action.type === 'ADD_HEROES') {
		return {
			...state,
			dataStore: action.data
		};
	};
	
	return state;
}