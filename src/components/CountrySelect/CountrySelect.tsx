import { IDataForAddressForm } from "@/interfaces/IDataForForms";
import { FormikProps } from "formik";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { ThemeContext } from "@theme/theme";

import style from './countrySelect.module.scss';

const CountrySelect = ({formik}: {formik: FormikProps<IDataForAddressForm>}) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
	formik.setFieldValue('country', selectedCountry.label?.split(' ')[1]);
  }, [selectedCountry]);

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

	const customStyles = {
		option: (defaultStyles, state) => ({
			...defaultStyles,
			color: state.isFocused ? "#333" : state.isSelected ? '#333' : "#333",
			backgroundColor: state.isFocused ? "#e9f5fe" : state.isSelected ? '#333' : "e9f5fe",
		}),
	
		control: (defaultStyles) => ({
			...defaultStyles,
			backgroundColor: "transparent",
			padding: "10px",
			border: theme === 'dark'? "1px solid white": '1px solid #ccc',
			borderRadius: "8px",
			boxShadow: "none",
			marginBottom: "20px",
		}),
		
		singleValue: (defaultStyles) => ({ ...defaultStyles, color: theme === 'dark'? "white": '#333' }),
	};

	

	return (
		<Select
			styles={customStyles}
			className={style.select}
			options={countries}
			value={selectedCountry}
			onChange={(selectedOption) => setSelectedCountry(selectedOption)}
		/>
	);
};

export default CountrySelect;