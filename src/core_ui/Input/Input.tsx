import React from 'react';
import './Input.css';

interface IProps {
	name: string;
	type: string;
}

const Input = ({ name, type }: IProps) => {
	return (
		<input
			className="c-input"
			name={name}
			type={type}
		/>
	);
};

export default Input;