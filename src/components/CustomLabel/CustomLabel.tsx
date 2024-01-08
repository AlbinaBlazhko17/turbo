import { ThemeContext } from '@theme/theme';
import cn from 'classnames';
import { useContext } from 'react';
import { CustomLabelType } from './CustomLabel.props';

import style from './customLabel.module.scss';

const CustomLabel: CustomLabelType = ({ label, children, className }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<label htmlFor={label} className={cn(style.label, style[`label__${theme}`], className)}>
			{children}
		</label>
	);
};

export default CustomLabel;
