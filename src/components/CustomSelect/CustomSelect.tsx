import { FormikProps } from "formik";
import { CSSProperties, useContext, useEffect, useState } from "react";
import Select, { CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";
import { ThemeContext } from "@theme/theme";
import { FormValues } from "../CustomForm/formik";
import { IDataForForm } from "@/interfaces/IDataForForms";

import style from './customSelect.module.scss';

const CustomSelect = ({ formik, type }: { formik: FormikProps<IDataForForm>, type: string }) => {
	const [data, setData] = useState();
	const [selectedData, setSelectedData] = useState({});
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		type === 'country' ? formik.setFieldValue('country', selectedData) : formik.setFieldValue('language', selectedData);
	}, [selectedData]);

	useEffect(() => {
		(async function () {
			if (type === 'country') {
				fetch(
					"https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
				)
					.then((response) => response.json())
					.then((data) => {
						setData(data.countries);
						setSelectedData(formik.values['country' as keyof FormValues] || data.userSelectValue);
					});
			} else {
				fetch(
					"https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/97607046542b532c395cf83df5185246/language-codes_json.json"
				)
					.then((response) => response.json())
					.then((data) => {
						setData(data.map((item: any) => ({ label: item.English, value: item.alpha2 })));
						setSelectedData(formik.values['language' as keyof FormValues] || data[0]);
					})
					.catch((err) => console.log(err));
			}
		})()
	}, []);


	const customStyles: StylesConfig<{}, true, GroupBase<{ value: string; label: string; }>> = {
		option: (defaultStyles: CSSObjectWithLabel, state) => ({
			...defaultStyles,
			color: state.isFocused ? "#333" : state.isSelected ? '#333' : "#333",
			backgroundColor: state.isFocused ? "#e9f5fe" : state.isSelected ? '#333' : "e9f5fe",
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
			options={data}
			value={selectedData}
			onChange={(selectedOption) => setSelectedData(selectedOption)}
		/>
	);
};

export default CustomSelect;