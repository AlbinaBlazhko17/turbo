export interface IDataForFetchGallery {
	total_results: number;
	page: number;
	per_page: number;
	photos: IDataForPhotos[];
	next_page: string;
}

export interface IDataForGallery {
	id: number;
	url: string;
	alt: string;
	counter: number;
}

export interface IDataForPhotos {
	id: number;
	width: number;
	height: number;
	url: string;
	photographer: string;
	photographer_url: string;
	photographer_id: number;
	avg_color: string;
	src: ISrc;
	liked: boolean;
	alt: string;
	counter: number;
}

export interface ISrc {
	original: string;
	large2x: string;
	large: string;
	medium: string;
	small: string;
	portrait: string;
	landscape: string;
	tiny: string;
}
