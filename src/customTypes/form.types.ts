export const enum EInterests {
	Reading = 'Reading',
	Traveling = 'Traveling',
	Sports = 'Sports',
	Music = 'Music',
	Gaming = 'Gaming',
}

export const enum EGender {
	Male = 'Male',
	Female = 'Female',
}

export const enum ESort {
	Id = 'id',
	FirstName = 'firstName',
	NotificationRange = 'NotificationRange',
}

export const enum EFormProps {
	firstName = 'firstName',
	lastName = 'lastName',
	email = 'email',
	gender = 'gender',
	city = 'city',
	country = 'country',
	zipCode = 'zipCode',
	interestes = 'interestes',
	language = 'language',
	notificationFrequency = 'notificationFrequency',
	comments = 'comments',
	profilePicture = 'profilePicture',
	terms = 'terms',
}

export type SelectValue = { value: string, label: string }