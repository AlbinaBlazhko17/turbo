import { FormikProps } from "formik";
import { useContext, useEffect, useState } from "react";
import Select, { CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";
import { ThemeContext } from "@theme/theme";
import { FormValues } from "../CustomForm/formik";
import { IDataForForm } from "@/interfaces/IDataForForms";

import style from './customSelect.module.scss';

const CustomSelect = ({ data, formik, type }: { data: { countries: { value: string, label: string }[], userSelectValue: { value: string, label: string } } | { value: string, label: string }[], formik: FormikProps<IDataForForm>, type: string }) => {
	const [selectedData, setSelectedData] = useState({});
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		if (type === 'country') {
			formik.setFieldValue('country', selectedData);
		} else {
			formik.setFieldValue('language', selectedData);
		}
	}, [selectedData]);

	useEffect(() => {
		if (type === 'country' && 'userSelectValue' in data) {
			setSelectedData(formik.values['country' as keyof FormValues] || data.userSelectValue);
		} else {
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

		singleValue: (defaultStyles: CSSObjectWithLabel) => ({ ...defaultStyles, color: theme === 'dark' ? "white" : '#333' }),
	};



	return (
		<Select
			isSearchable={true}
			styles={customStyles}
			className={style.select}
			options={type === 'country' ? data.countries : data}
			value={selectedData}
			onChange={(selectedOption) => setSelectedData(selectedOption)}
		/>
	);
};

export default CustomSelect;