import { IDataForFetchGallery, IDataForPhotos } from '@/interfaces/IDataForGallery';
import { IDataForUserPhoto } from '@/interfaces/IDataForPersonalAccount';
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiKey = 'XmTW7y7FCFocZ4NEKpkreD9FkkTJRltrtYzxwQLEpzYkO8JzAhGmSXhq';

export async function getAllPhotos(perPage: number, page: number) {
	try {
		const response = await fetch(
			`https://api.pexels.com/v1/search?query=products&per_page=${perPage}&page=${page}`,
			{
				headers: {
					Authorization: apiKey,
				},
			},
		);

		if (response.ok) {
			const data: IDataForFetchGallery = await response.json();
			return data.photos.map((item: IDataForPhotos, index: number) => ({
				id: item.id,
				url: item.src.large2x,
				alt: item.alt,
				counter: index,
			}));
		} else {
			throw new Error('Failed to fetch data');
		}
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
}

export async function getPhotoByUserId(id: number) {
	const url = `https://api.slingacademy.com/v1/sample-data/users/${id}`;
	const data: IDataForUserPhoto | Response = await fetch(url).then((res) => res.json());
	if (!(data instanceof Response)) {
		return data.user.profile_picture;
	}
	return null;
}
