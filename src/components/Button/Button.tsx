import cn from 'classnames';

import style from './button.module.scss';
import { useEffect } from 'react';

function Button({children, appearance, className, ...props}: {children: string, appearance: 'outlined' | 'filled', className?: string}) {
	useEffect(() =>{
		console.log(className)
	},[])
	return(
		<button className={cn(style.btn, className, {
			[style['btn_outlined']]: appearance === 'outlined',
			[style['btn_filled']]: appearance === 'filled',
		})} {...props}>{children}</button>
	)
}

export default Button;