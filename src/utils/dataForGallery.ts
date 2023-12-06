import { IDataForGallery } from '@/interfaces/IDataForGallery';
import { IDataForUserPhoto } from '@/interfaces/IDataForPersonalAccount';

export async function getAllPhotos(offset: number, limit: number) {
	const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`;
	const data: IDataForGallery | Response = await fetch(url).then((res) => res.json());
	if (!(data instanceof Response)) {
		return data.photos.map((item, index) => ({ ...item, counter: index }));
	}
	return null;
}

export async function getPhotoByUserId(id: number) {
	const url = `https://api.slingacademy.com/v1/sample-data/users/${id}`;
	const data: IDataForUserPhoto | Response = await fetch(url).then((res) => res.json());
	if (!(data instanceof Response)) {
		return data.user.profile_picture;
	}
	return null;
}
