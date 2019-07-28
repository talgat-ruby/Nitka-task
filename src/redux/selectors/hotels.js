import {createSelector} from 'reselect';

export const hotels = store => store.hotels;

export const hotelsList = createSelector(
	hotels,
	hotels => hotels.list
);
