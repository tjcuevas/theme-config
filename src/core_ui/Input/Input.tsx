import React from 'react';
import './Input.css';

export interface IInputProps {
	name: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	type: string;
	value?: string;
}

const Input = ({ name, onChange, type, value }: IInputProps) => {
	return (
		<input
			className="c-input"
			name={name}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
