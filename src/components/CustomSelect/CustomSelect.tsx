import { ThemeContext } from '@theme/theme';
import { memo, useContext, useEffect, useState } from 'react';
import Select, { CSSObjectWithLabel, GroupBase, OptionsOrGroups, StylesConfig } from 'react-select';
import { FormValues } from '../../customTypes/formik.types';
import CustomSelectProps from './CustomSelect.props';

import style from './customSelect.module.scss';

const CustomSelect = ({ data, formik, type }: CustomSelectProps) => {
	const [selectedData, setSelectedData] = useState({});
	const { theme } = useContext(ThemeContext);
	const options = type === 'country' && 'countries' in data ? data.countries : data;

	useEffect(() => {
		if (type === 'country') {
			formik.setFieldValue('country', selectedData);
		} else {
			formik.setFieldValue('language', selectedData);
		}
	}, [selectedData]);

	useEffect(() => {
		if (type === 'country' && 'userSelectValue' in data && data.userSelectValue.value !== '') {
			setSelectedData(formik.values.country.value !== '' ? formik.values.country : data.userSelectValue);
		} else {
			if (Array.isArray(data) && data.length > 0)
				setSelectedData(formik.values['language' as keyof FormValues] || data[0]);
		}
	}, []);

	const customStyles: StylesConfig<NonNullable<unknown>, true, GroupBase<{ value: string; label: string }>> = {
		option: (defaultStyles: CSSObjectWithLabel, state) => ({
			...defaultStyles,
			color: state.isFocused ? '#333' : state.isSelected ? '#fff' : '#333',
			backgroundColor: state.isFocused ? '#e9f5fe' : state.isSelected ? '#2196f3' : '#ffff',
			overflow: 'hidden',
		}),

		control: (defaultStyles: CSSObjectWithLabel) => ({
			...defaultStyles,
			backgroundColor: 'transparent',
			padding: '10px',
			border: theme === 'dark' ? '1px solid white' : '1px solid #ccc',
			borderRadius: '8px',
			boxShadow: 'none',
			marginBottom: '20px',
			width: '100%',
		}),

		input: (defaultStyles: CSSObjectWithLabel) => ({
			...defaultStyles,
			color: theme === 'dark' ? 'white' : '#333',
		}),

		singleValue: (defaultStyles: CSSObjectWithLabel) => ({
			...defaultStyles,
			color: theme === 'dark' ? 'white' : '#333',
		}),
		menu: (defaultStyles: CSSObjectWithLabel) => ({
			...defaultStyles,
			height: '14rem',
			overflowY: 'auto',
		}),
	};

	return (
		<Select
			isSearchable
			styles={customStyles}
			className={style.select}
			options={options as OptionsOrGroups<NonNullable<unknown>, GroupBase<{ value: string; label: string }>>}
			value={selectedData}
			onChange={(selectedOption) =>
				setSelectedData(!selectedOption && 'userSelectValue' in data ? data.userSelectValue : selectedOption)
			}
		/>
	);
};

export default memo(CustomSelect);
