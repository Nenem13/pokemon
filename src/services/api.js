/* eslint-disable no-await-in-loop */
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2',
});
export const listPokemon = async (offset = 0, limit = 18) => {
	const response = [];
	await api
		.get(`/pokemon?offset=${offset}&limit=${limit}`)
		.then(async ({ data }) => {
			for (let index = 0; index < data.results.length; index += 1) {
				const { url } = data.results[index];
				const details = await axios.get(url);
				console.log(data.results[index]);
				console.log(details.data);
				console.log({ ...data.results[index], ...details.data });
				response.push({ ...data.results[index], ...details.data });
				console.log(response);
			}
		})
		.catch(error => console.log(error));
	return response;
};

export default api;
