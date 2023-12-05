import { PropsWithChildren } from 'react';

export interface CustomLabelProps {
	label?: string;
	className?: string;
}

export type CustomLabelType = React.FC<PropsWithChildren<CustomLabelProps>>;
