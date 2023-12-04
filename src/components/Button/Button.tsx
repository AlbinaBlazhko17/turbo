import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import style from './button.module.scss';

const Button: FC<
	PropsWithChildren<{
		children: string;
		appearance: 'outlined' | 'filled';
		className?: string;
		onClick?: () => void;
		type?: 'button' | 'submit';
	}>
> = ({ children, appearance, className, onClick, type, ...props }) => {
	return (
		<button
			className={cn(style.btn, className, {
				[style['btn_outlined']]: appearance === 'outlined',
				[style['btn_filled']]: appearance === 'filled',
			})}
			onClick={onClick}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
