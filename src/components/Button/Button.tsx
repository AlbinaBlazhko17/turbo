import cn from 'classnames';

import style from './button.module.scss';


function Button({children, appearance, className, ...props}: {children: string, appearance: 'outlined' | 'filled', className?: string}) {
	return(
		<button className={cn(style.btn, className, {
			[style['btn_outlined']]: appearance === 'outlined',
			[style['btn_filled']]: appearance === 'filled',
		})} {...props}>{children}</button>
	)
}

export default Button;