import React from 'react';
import './Input.css';

interface IProps {
	name: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	type: string;
	value?: string;
}

const Input = ({ name, onChange, type, value }: IProps) => {
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