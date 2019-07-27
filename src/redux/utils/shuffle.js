export default function shuffle(list) {
	const result = [...list];
	for (let i = list.length - 1; i >= 0; i--) {
		const index = Math.floor(Math.random() * i);
		[result[index], result[i]] = [result[i], result[index]];
	}

	return result;
}
