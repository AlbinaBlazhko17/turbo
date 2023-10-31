import * as Yup from 'yup';

export const validationSchemaPersonalInfo = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'First name is too short!')
		.max (20, 'First name is too long!')
		.required ('First name is required!'),
	lastName: Yup.string()
		.min(2, 'Last name is too short!')
		.max (20, 'Last name is too long!')
		.required ('Last name is required!'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	gender: Yup.string()
		.required('Gender is required!'),
});

export const validationSchemaAddress = Yup.object().shape({
	city: Yup.string()
		.min(2, 'First name is too short!')
		.max (20, 'First name is too long!')
		.required ('First name is required!'),
	country: Yup.string()
		.min(5, 'First name is too short!')
		.max (30, 'First name is too long!')
		.required ('First name is required!'),
	number: Yup.string()
		.min(10, 'Telephone number must be at least 10 characters')
		.required('Telephone number is required')
});

export const validationSchemaPreferences = Yup.object().shape({
	interests: Yup.array()
		.of(Yup.string())
		.min(1, 'Select at least one interest')
		.required('Select at least one interest'),
	language: Yup.string()
		.required('Select preferred language'),
	rangeSlider: Yup.number()
		.required('Select preferred notification range')
});

export const validationSchemaSubmit = Yup.object().shape({
	comment: Yup.string(),
	profilePicture: Yup.mixed()
		.required('Profile picture is required')
		.test('fileSize', 'File size is too large', (value) => {
			return value && value.size <= 1024000;
		})
		.test('fileType', 'Invalid file type', (value) => {
			return value && /^image\//.test(value.type);
		}),
	terms: Yup.boolean()
		.required('Terms and conditions is required')
})