import {createSelector} from 'reselect';

export const hotels = store => store.hotels;

export const hotelsList = createSelector(
	hotels,
	hotels => hotels.list
);

const getIdFromLocation = (_, props) => props.match.params.id;

export const getHotel = createSelector(
	hotelsList,
	getIdFromLocation,
	(list, hotelId) => list.find(({id}) => id === Number(hotelId))
);
