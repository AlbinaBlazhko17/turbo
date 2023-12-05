export interface IDataForUserPhoto {
	success: boolean;
	message: string;
	user: UserPhoto;
}

export interface UserPhoto {
	id: number;
	gender: string;
	date_of_birth: string;
	job: string;
	city: string;
	zipcode: string;
	latitude: number;
	profile_picture: string;
	first_name: string;
	email: string;
	last_name: string;
	phone: string;
	street: string;
	state: string;
	country: string;
	longitude: number;
}
