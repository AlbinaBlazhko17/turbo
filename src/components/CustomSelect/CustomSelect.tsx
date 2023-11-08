import { FormikProps } from "formik";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { ThemeContext } from "@theme/theme";
import { FormValues } from "../CustomForm/formik";

import style from './customSelect.module.scss';

const CustomSelect = ({ formik, type }: { formik: FormikProps<FormValues>, type: string }) => {
	const [data, setData] = useState();
	const [selectedData, setSelectedData] = useState({});
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		type === 'country' ? formik.setFieldValue('country', selectedData.label?.split(' ')[1]) : formik.setFieldValue('language', selectedData.label);
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
						setSelectedData(data.userSelectValue);
					});
			} else {
				fetch(
					"https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/97607046542b532c395cf83df5185246/language-codes_json.json"
				)
					.then((response) => response.json())
					.then((data) => {
						setData(data.map((item: any) => ({ value: item.alpha2, label: item.English })));
						setSelectedData(data[0].English);
					})
					.catch((err) => console.log(err));
			}
		})()
	}, []);


	const customStyles = {
		option: (defaultStyles, state) => ({
			...defaultStyles,
			color: state.isFocused ? "#333" : state.isSelected ? '#333' : "#333",
			backgroundColor: state.isFocused ? "#e9f5fe" : state.isSelected ? '#333' : "e9f5fe",
			overflow: 'hidden',
		}),

		control: (defaultStyles) => ({
			...defaultStyles,
			backgroundColor: "transparent",
			padding: "10px",
			border: theme === 'dark' ? "1px solid white" : '1px solid #ccc',
			borderRadius: "8px",
			boxShadow: "none",
			marginBottom: "20px",
			width: '434px',
		}),

		singleValue: (defaultStyles) => ({ ...defaultStyles, color: theme === 'dark' ? "white" : '#333' }),
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