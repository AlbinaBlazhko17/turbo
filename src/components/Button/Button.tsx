import cn from 'classnames';

import style from './button.module.scss';

function Button({ children, appearance, className, onClick, type, ...props }: { children: string, appearance: 'outlined' | 'filled', className?: string, onClick: () => void, type?: 'button' | 'submit' }) {
	return (
		<button className={cn(style.btn, className, {
			[style['btn_outlined']]: appearance === 'outlined',
			[style['btn_filled']]: appearance === 'filled',
		})}
			onClick={onClick}
			type={type}
			{...props}
		>
			{children}</button>
	)
}

export default Button;