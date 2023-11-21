import { FormikProps } from "formik";
import { useContext, useEffect, useState, memo } from "react";
import Select, { CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";
import { ThemeContext } from "@theme/theme";
import { FormValues } from "../../customTypes/formik.types";
import { IDataForForm } from "@/interfaces/IDataForForms";

import style from './customSelect.module.scss';

const CustomSelect = ({ data, formik, type }: { data: { countries: { value: string, label: string }[], userSelectValue: { value: string, label: string } }, formik: FormikProps<IDataForForm>, type: string }) => {
	const [selectedData, setSelectedData] = useState({});
	const { theme } = useContext(ThemeContext);
	const options = type === 'country' ? data.countries : data;

	useEffect(() => {
		if (type === 'country') {
			formik.setFieldValue('country', selectedData);
		} else {
			formik.setFieldValue('language', selectedData);
		}
	}, [selectedData]);

	useEffect(() => {
		if (type === 'country' && 'userSelectValue' in data) {
			setSelectedData(formik.values.country.value !== '' ? formik.values.country : data.userSelectValue);
		}
		else {
			setSelectedData(formik.values['language' as keyof FormValues] || data[0]);
		}
	}, []);


	const customStyles: StylesConfig<{}, true, GroupBase<{ value: string; label: string; }>> = {
		option: (defaultStyles: CSSObjectWithLabel, state) => ({
			...defaultStyles,
			color: state.isFocused ? "#333" : state.isSelected ? '#fff' : "#333",
			backgroundColor: state.isFocused ? "#e9f5fe" : state.isSelected ? '#2196f3' : "#ffff",
			overflow: 'hidden',
		}),

		control: (defaultStyles: CSSObjectWithLabel) => ({
			...defaultStyles,
			backgroundColor: "transparent",
			padding: "10px",
			border: theme === 'dark' ? "1px solid white" : '1px solid #ccc',
			borderRadius: "8px",
			boxShadow: "none",
			marginBottom: "20px",
			width: '434px',
		}),

		input: (defaultStyles: CSSObjectWithLabel) => ({ ...defaultStyles, color: theme === 'dark' ? "white" : '#333' }),

		singleValue: (defaultStyles: CSSObjectWithLabel) => ({ ...defaultStyles, color: theme === 'dark' ? "white" : '#333' }),
	};



	return (
		<Select
			isSearchable
			styles={customStyles}
			className={style.select}
			options={options}
			value={selectedData}
			onChange={(selectedOption) => setSelectedData(!selectedOption ? data.userSelectValue : selectedOption)}
		/>
	);
};

export default memo(CustomSelect);