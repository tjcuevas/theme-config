import React, { useEffect, useState } from 'react';
import './ThemeValues.css';
import Input from '../core_ui/Input/Input';

const getCustomProperties = (styleSheet: StyleSheet): any[] => {
	return [...(styleSheet as any).cssRules]
		.filter((rule) => rule.style != null)
		.reduce((properties, rule) => {
			const props = [...rule.style]
				.map((propName) => {
					return [
						propName.trim(),
						rule.style.getPropertyValue(propName).trim(),
					];
				})
				.filter((p) => p[0].startsWith('--'));

			return [...properties, ...props];
		}, []);
};

const ThemeValues = () => {
	const [cssCustomProperties, setCssCustomProperties] = useState<any[]>([]);
	useEffect(() => {
		const styleSheets = [...document.styleSheets];
		const customProperties = styleSheets.reduce<any[]>(
			(allProperties, styleSheet) => [
				...allProperties,
				...getCustomProperties(styleSheet),
			],
			[],
		);

		setCssCustomProperties(customProperties);
	}, []);

	return (
		<div className="values-display">
			{cssCustomProperties.map((p, i) => (
				<div key={i}>
					<CustomPropertyInput name={p[0]} initialValue={p[1]} />
				</div>
			))}
		</div>
	);
};

interface ICustomPropertyInputProps {
	name: string;
	initialValue: string;
}

const CustomPropertyInput = ({
	name,
	initialValue,
}: ICustomPropertyInputProps) => {
	const [value, setValue] = useState(initialValue);

	return (
		<div>
			<label>{name}</label>
			<Input
				type={initialValue.startsWith('#') ? 'color' : 'text'}
				name={name}
				value={value}
				onChange={(event) => {
					const rootElement = document.querySelector(':root');
					if (rootElement) {
						(rootElement as any).style.setProperty(
							event.target.name,
							event.target.value,
						);
					}

					setValue(event.target.value);
				}}
			/>
		</div>
	);
};
export default ThemeValues;
