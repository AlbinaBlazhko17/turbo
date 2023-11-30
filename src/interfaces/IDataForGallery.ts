export interface IDataForGallery {
	success: boolean;
	total_photos: number;
	message: string;
	offset: number;
	limit: number;
	photos: IDataForPhotos[];
}

export interface IDataForPhotos {
	url: string;
	user: number;
	title: string;
	id: number;
	description: string;
	counter: number;
}
