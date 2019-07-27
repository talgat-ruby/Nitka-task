import shuffle from './shuffle';

const arr = [1, 2, 3, 4, 5];

describe('shuffle - ', () => {
	const shuffled = shuffle(arr);
	test('should shuffled have the same amount items', () => {
		expect(shuffled).toHaveLength(arr.length);
	});

	test('should shuffled be new array', () => {
		expect(shuffled).not.toBe(arr);
	});

	test('should shuffled include same items', () => {
		expect(shuffled).toEqual(expect.arrayContaining(arr));
	});
});
