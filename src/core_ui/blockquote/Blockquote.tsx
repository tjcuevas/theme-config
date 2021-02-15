import React, { ReactNode } from 'react';
import './Blockquote.css';

export interface IBlockquoteProps {
	children: ReactNode;
}

const Input = ({ children }: IBlockquoteProps) => {
	return (
		<blockquote>{children}</blockquote>
	);
};

export default Input;