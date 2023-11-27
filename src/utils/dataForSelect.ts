import { defer } from 'react-router';

export const dataForSelectCountry = async () => {
	try {
		const response = await fetch(
			'https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code',
		);
		const data = await response.json();
		return {
			countries: data.countries,
			userSelectValue: data.userSelectValue,
		};
	} catch (err) {
		if (err instanceof Error) {
			throw new Error('Error in dataForSelectCountry' + err.message);
		}
	}
};

export const dataForSelectLanguage = async () => {
	try {
		const response = await fetch(
			'https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/97607046542b532c395cf83df5185246/language-codes_json.json',
		);
		const data = await response.json();
		return data.map((item: any) => ({
			label: item.English,
			value: item.alpha2,
		}));
	} catch (err) {
		if (err instanceof Error) {
			throw new Error('Error in dataForSelectLanguage' + err.message);
		}
	}
};

export async function loader() {
	return defer({
		countries: await dataForSelectCountry(),
		languages: await dataForSelectLanguage(),
	});
}
