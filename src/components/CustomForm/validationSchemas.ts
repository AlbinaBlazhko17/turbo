import * as Yup from 'yup';
const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', '.webp'];

export const validationSchemaPersonalInfo = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'First name is too short!')
		.max(20, 'First name is too long!')
		.required('First name is required!'),
	lastName: Yup.string()
		.min(2, 'Last name is too short!')
		.max(20, 'Last name is too long!')
		.required('Last name is required!'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	gender: Yup.string().required('Gender is required!'),
});

export const validationSchemaAddress = Yup.object().shape({
	city: Yup.string().min(2, 'City is too short!').max(30, 'City is too long!').required('City is required!'),
	country: Yup.object({
		value: Yup.string().required('Select country!'),
		label: Yup.string().required(),
	}).required('Select country!'),
	zipCode: Yup.number().min(5, 'ZipCode must be at least 10 characters').required('ZipCode is required'),
});

export const validationSchemaPreferences = Yup.object().shape({
	interests: Yup.array()
		.of(Yup.string())
		.min(1, 'Select at least one interest')
		.required('Select at least one interest'),
	language: Yup.object({
		value: Yup.string().required('Select preferred language'),
		label: Yup.string().required(),
	}).required('Select preferred language'),
	notificationFrequency: Yup.number().required('Select preferred notification range'),
});

export const validationSchemaSubmit = Yup.object().shape({
	comments: Yup.string().notRequired(),
	profilePicture: Yup.string()
		.required('Profile picture is required')
		.test('is-image', 'Invalid file format, only image files are allowed', (value) => {
			if (!value) return true;
			const extension = value.split('.').pop()?.toLowerCase();
			//@ts-ignore
			return imageExtensions.includes(extension);
		})
		.test('max-file-name-length', `File name exceeds ${50} characters`, (value) => {
			if (!value) return true;

			const fileName = value.split('.').shift();
			if (fileName) return fileName.length <= 50;
		}),
	terms: Yup.boolean()
		.test('is-true', 'You must accept the terms and conditions', (value) => value === true)
		.required('Terms and conditions is required'),
});

export const validationSchemaForPersonalAccount = Yup.object().shape({
	...validationSchemaPersonalInfo.fields,
	...validationSchemaAddress.fields,
	...validationSchemaPreferences.fields,
	...validationSchemaSubmit.fields,
});
