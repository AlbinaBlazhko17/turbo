import { IDataForGallery, IDataForPhotos } from '@/interfaces/IDataForGallery';

export async function getAllPhotos(offset: number, limit: number) {
	const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`;
	const data: IDataForGallery | Response = await fetch(url).then((res) => res.json());
	if (!(data instanceof Response)) {
		return data.photos;
	}
	return null;
}
