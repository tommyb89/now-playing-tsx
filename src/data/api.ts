import axios, { AxiosError, AxiosResponse } from "axios";

const api = {
	key: process.env.REACT_APP_API_KEY,
	base: "https://api.themoviedb.org/3/movie/now_playing",
};

export interface Movie {
	id: number;
	title: string;
	poster_path: string | number;
	vote_average: number;
}

export const getMovies = async (): Promise<void | Movie[]> =>
	axios
		.get(`${api.base}?api_key=${api.key}`)
		.then(({ data }: AxiosResponse) => {
			return data.results;
		})
		.catch((error: AxiosError) => {
			console.error(`${error.message} in api.ts -> getMovies.\n`, { error });
		});
