import type { Story } from '@storybook/react';
import React from 'react';
import Input, { IInputProps } from './Input';

export default {
	title: 'components/Input',
	component: Input
};

const Template: Story<IInputProps> = (args: IInputProps) => <Input {...args} />

export const EmailInput = Template.bind({});
EmailInput.args = { type: 'email' }

export const NumberInput = Template.bind({});
NumberInput.args = { type: 'number' }

export const SearchInput = Template.bind({});
SearchInput.args = { type: 'search' }

export const TelInput = Template.bind({});
TelInput.args = { type: 'tel' }

export const TextInput = Template.bind({});
TextInput.args = { type: 'text' }

export const UrlInput = Template.bind({});
UrlInput.args = { type: 'url' }