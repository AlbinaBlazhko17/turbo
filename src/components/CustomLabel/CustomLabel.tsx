import cn from 'classnames'
import { ThemeContext } from '@theme/theme';
import { useContext, ReactNode } from 'react';

import style from './customLabel.module.scss';

function CustomLabel({label, children}: {label?: string, children: ReactNode}) {
	const {theme} = useContext(ThemeContext);
	return (
		<label htmlFor={label} className={cn(style.label, style[`label__${theme}`])}>{children}</label>
	)
}

export default CustomLabel;