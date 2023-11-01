import { IDataForAddressForm } from "@/interfaces/IDataForForms";
import { FormikProps } from "formik";
import { useEffect, useState } from "react";
import Select from "react-select";

import style from './countrySelect.module.scss';

const CountrySelect = ({formik}: {formik: FormikProps<IDataForAddressForm>}) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
	fetch(
		"https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
	)
		.then((response) => response.json())
		.then((data) => {
			setCountries(data.countries);
			setSelectedCountry(data.userSelectValue);
		});
	}, []);

	return (
		<Select
			className={style.select}
			options={countries}
			value={selectedCountry}
			onChange={(selectedOption) => setSelectedCountry(selectedOption)}
		/>
	);
};

export default CountrySelect;