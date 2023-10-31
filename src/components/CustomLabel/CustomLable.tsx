import cn from 'classnames'
import { ThemeContext } from '@theme/theme';
import { useContext } from 'react';

import style from './customLable.module.scss';

function CustomLabel({label, children}: {label: string, children: string}) {
	const {theme} = useContext(ThemeContext);
	return (
		<label htmlFor={label} className={cn(style.label, style[`label__${theme}`])}>{children}</label>
	)
}

export default CustomLabel;