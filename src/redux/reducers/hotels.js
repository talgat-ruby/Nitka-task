import data from '../../data.json';

const initialState = {
	list: data
};

export default function(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
