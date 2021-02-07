import React, { ReactNode } from 'react';
import './Blockquote.css';

interface IProps {
	children: ReactNode;
}

const Input = ({ children }: IProps) => {
	return (
		<blockquote>{children}</blockquote>
	);
};

export default Input;