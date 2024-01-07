import Select, { ActionMeta, CSSObjectWithLabel, GroupBase, MultiValue, StylesConfig } from 'react-select';
import { ICustomMultiSelectProps } from './CustomMultiSelect.props';
import { dataForProducts } from '@utils/dataForProducts';
import { ThemeContext } from '@/theme/theme';
import { useContext, useEffect, useState } from 'react';
import { SelectValue } from '@/customTypes/form.types';

import style from './customMultiSelect.module.scss';

function CustomMultiSelect<T>({ formik, name, ...rest }: ICustomMultiSelectProps<T>) {
	const [selectedData, setSelectedData] = useState<SelectValue[]>(formik.values.products || []);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		formik.setFieldValue(name, selectedData);
	}, [selectedData]);

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
			border: theme === 'dark' ? '2px solid white' : '2px solid #ccc',
			borderRadius: '8px',
			boxShadow: 'none',
			marginBottom: '20px',
			width: '100%',
		}),

		input: (defaultStyles: CSSObjectWithLabel) => ({
			...defaultStyles,
			color: theme === 'dark' ? 'white' : '#333',
			width: '100%',
		}),

		singleValue: (defaultStyles: CSSObjectWithLabel) => ({
			...defaultStyles,
			color: theme === 'dark' ? 'white' : '#333',
		}),
		menu: (defaultStyles: CSSObjectWithLabel) => ({
			...defaultStyles,
			height: 'auto',
			overflowY: 'auto',
			zIndex: 2,
		}),
	};

	return (
		<div className={style.select}>
			<Select
				isSearchable={false}
				styles={customStyles}
				isMulti
				name={name}
				options={dataForProducts}
				value={selectedData}
				onChange={(selectedOption) => setSelectedData(selectedOption ? (selectedOption as SelectValue[]) : [])}
				{...rest}
			/>
		</div>
	);
}

export default CustomMultiSelect;
