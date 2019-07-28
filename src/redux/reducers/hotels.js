import data from '../../data.json';

import {shuffle} from '../utils/';

import {GET_HOTELS, SET_DATES} from '../constants/';

const initialState = {
	list: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_HOTELS:
			return {
				...state,
				list: action.list
			};
		case SET_DATES:
			return {
				...state,
				list: state.list.map(v =>
					action.id === v.id ? {...v, dates: action.dates} : v
				)
			};
		default:
			return state;
	}
}

export const getHotels = ({search = ''} = {}) => ({
	type: GET_HOTELS,
	list: search
		? data.filter(({name, city}) => {
				const s = search.toLowerCase();
				return [name, city].some(val => val.toLowerCase().includes(s));
		  })
		: shuffle(data).slice(0, 5)
});

export const setDates = (id, dates) => ({
	type: SET_DATES,
	id,
	dates
});
